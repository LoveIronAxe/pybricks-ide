/**
 * Pybricks IDE - IndexedDB 数据库层
 * 本地持久化存储：车辆配置、程序、地图、设置
 */

class PybricksDB {
  constructor() {
    this.dbName = 'pybricks_ide';
    this.dbVersion = 1;
    this.db = null;
  }

  // ============================================================
  // 初始化数据库
  // ============================================================
  async init() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
        return;
      }

      console.log('[DB] Opening database...');
      
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => {
        console.error('[DB] Database open error:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('[DB] Database opened successfully');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        console.log('[DB] Upgrading database...');
        const db = event.target.result;

        // 车辆配置表
        if (!db.objectStoreNames.contains('vehicles')) {
          const vehicleStore = db.createObjectStore('vehicles', { keyPath: 'id' });
          vehicleStore.createIndex('name', 'name', { unique: false });
          vehicleStore.createIndex('createdAt', 'createdAt', { unique: false });
          vehicleStore.createIndex('updatedAt', 'updatedAt', { unique: false });
          console.log('[DB] Created vehicles store');
        }

        // 程序配置表
        if (!db.objectStoreNames.contains('programs')) {
          const programStore = db.createObjectStore('programs', { keyPath: 'id' });
          programStore.createIndex('vehicleId', 'vehicleId', { unique: false });
          programStore.createIndex('name', 'name', { unique: false });
          programStore.createIndex('createdAt', 'createdAt', { unique: false });
          programStore.createIndex('updatedAt', 'updatedAt', { unique: false });
          console.log('[DB] Created programs store');
        }

        // 地图配置表
        if (!db.objectStoreNames.contains('maps')) {
          const mapStore = db.createObjectStore('maps', { keyPath: 'id' });
          mapStore.createIndex('name', 'name', { unique: false });
          mapStore.createIndex('createdAt', 'createdAt', { unique: false });
          mapStore.createIndex('updatedAt', 'updatedAt', { unique: false });
          console.log('[DB] Created maps store');
        }

        // 设置表
        if (!db.objectStoreNames.contains('settings')) {
          const settingsStore = db.createObjectStore('settings', { keyPath: 'key' });
          console.log('[DB] Created settings store');
        }

        // 当前选中的 ID 表（单例）
        if (!db.objectStoreNames.contains('appState')) {
          db.createObjectStore('appState', { keyPath: 'key' });
          console.log('[DB] Created appState store');
        }
      };
    });
  }

  // ============================================================
  // 工具方法
  // ============================================================
  _getTimestamp() {
    return new Date().toISOString();
  }

  _generateId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  _transaction(storeName, mode = 'readonly') {
    return this.db.transaction(storeName, mode);
  }

  _store(transaction, storeName) {
    return transaction.objectStore(storeName);
  }

  _request(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // ============================================================
  // 车辆 CRUD
  // ============================================================

  /**
   * 保存车辆（新增或更新）
   * @param {Object} vehicle - 车辆配置对象
   * @returns {Promise<Object>} 保存后的车辆
   */
  async saveVehicle(vehicle) {
    await this.init();
    
    const now = this._getTimestamp();
    const isNew = !vehicle.id;
    
    const data = {
      ...vehicle,
      id: vehicle.id || this._generateId(),
      createdAt: vehicle.createdAt || now,
      updatedAt: now
    };

    return new Promise((resolve, reject) => {
      const tx = this._transaction('vehicles', 'readwrite');
      const store = this._store(tx, 'vehicles');
      const request = store.put(data);
      
      request.onsuccess = () => {
        console.log('[DB] Vehicle saved:', data.id);
        resolve(data);
      };
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取单个车辆
   * @param {string} id - 车辆ID
   * @returns {Promise<Object|null>}
   */
  async getVehicle(id) {
    await this.init();
    
    const tx = this._transaction('vehicles', 'readonly');
    const store = this._store(tx, 'vehicles');
    const request = store.get(id);
    
    return this._request(request);
  }

  /**
   * 获取所有车辆
   * @returns {Promise<Array>}
   */
  async getAllVehicles() {
    await this.init();
    
    const tx = this._transaction('vehicles', 'readonly');
    const store = this._store(tx, 'vehicles');
    const request = store.getAll();
    
    return this._request(request);
  }

  /**
   * 删除车辆
   * @param {string} id - 车辆ID
   * @returns {Promise<void>}
   */
  async deleteVehicle(id) {
    await this.init();
    
    const tx = this._transaction('vehicles', 'readwrite');
    const store = this._store(tx, 'vehicles');
    const request = store.delete(id);
    
    // 同时删除关联的程序
    const programs = await this.getProgramsByVehicle(id);
    const tx2 = this._transaction('programs', 'readwrite');
    const programStore = this._store(tx2, 'programs');
    
    programs.forEach(p => programStore.delete(p.id));
    
    return this._request(request);
  }

  // ============================================================
  // 程序 CRUD
  // ============================================================

  /**
   * 保存程序（新增或更新）
   * @param {Object} program - 程序对象
   * @returns {Promise<Object>} 保存后的程序
   */
  async saveProgram(program) {
    await this.init();
    
    const now = this._getTimestamp();
    const isNew = !program.id;
    
    const data = {
      ...program,
      id: program.id || this._generateId(),
      createdAt: program.createdAt || now,
      updatedAt: now
    };

    return new Promise((resolve, reject) => {
      const tx = this._transaction('programs', 'readwrite');
      const store = this._store(tx, 'programs');
      const request = store.put(data);
      
      request.onsuccess = () => {
        console.log('[DB] Program saved:', data.id);
        resolve(data);
      };
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取单个程序
   * @param {string} id - 程序ID
   * @returns {Promise<Object|null>}
   */
  async getProgram(id) {
    await this.init();
    
    const tx = this._transaction('programs', 'readonly');
    const store = this._store(tx, 'programs');
    const request = store.get(id);
    
    return this._request(request);
  }

  /**
   * 获取某车辆的所有程序
   * @param {string} vehicleId - 车辆ID
   * @returns {Promise<Array>}
   */
  async getProgramsByVehicle(vehicleId) {
    await this.init();
    
    const tx = this._transaction('programs', 'readonly');
    const store = this._store(tx, 'programs');
    const index = store.index('vehicleId');
    const request = index.getAll(vehicleId);
    
    return this._request(request);
  }

  /**
   * 获取所有程序
   * @returns {Promise<Array>}
   */
  async getAllPrograms() {
    await this.init();
    
    const tx = this._transaction('programs', 'readonly');
    const store = this._store(tx, 'programs');
    const request = store.getAll();
    
    return this._request(request);
  }

  /**
   * 删除程序
   * @param {string} id - 程序ID
   * @returns {Promise<void>}
   */
  async deleteProgram(id) {
    await this.init();
    
    const tx = this._transaction('programs', 'readwrite');
    const store = this._store(tx, 'programs');
    const request = store.delete(id);
    
    return this._request(request);
  }

  // ============================================================
  // 地图 CRUD
  // ============================================================

  /**
   * 保存地图（新增或更新）
   * @param {Object} map - 地图对象
   * @returns {Promise<Object>} 保存后的地图
   */
  async saveMap(map) {
    await this.init();
    
    const now = this._getTimestamp();
    const isNew = !map.id;
    
    const data = {
      ...map,
      id: map.id || this._generateId(),
      createdAt: map.createdAt || now,
      updatedAt: now
    };

    return new Promise((resolve, reject) => {
      const tx = this._transaction('maps', 'readwrite');
      const store = this._store(tx, 'maps');
      const request = store.put(data);
      
      request.onsuccess = () => {
        console.log('[DB] Map saved:', data.id);
        resolve(data);
      };
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * 获取单个地图
   * @param {string} id - 地图ID
   * @returns {Promise<Object|null>}
   */
  async getMap(id) {
    await this.init();
    
    const tx = this._transaction('maps', 'readonly');
    const store = this._store(tx, 'maps');
    const request = store.get(id);
    
    return this._request(request);
  }

  /**
   * 获取所有地图
   * @returns {Promise<Array>}
   */
  async getAllMaps() {
    await this.init();
    
    const tx = this._transaction('maps', 'readonly');
    const store = this._store(tx, 'maps');
    const request = store.getAll();
    
    return this._request(request);
  }

  /**
   * 删除地图
   * @param {string} id - 地图ID
   * @returns {Promise<void>}
   */
  async deleteMap(id) {
    await this.init();
    
    const tx = this._transaction('maps', 'readwrite');
    const store = this._store(tx, 'maps');
    const request = store.delete(id);
    
    return this._request(request);
  }

  // ============================================================
  // 设置管理
  // ============================================================

  /**
   * 保存设置
   * @param {string} key - 设置键
   * @param {any} value - 设置值
   * @returns {Promise<void>}
   */
  async setSetting(key, value) {
    await this.init();
    
    const tx = this._transaction('settings', 'readwrite');
    const store = this._store(tx, 'settings');
    const request = store.put({ key, value, updatedAt: this._getTimestamp() });
    
    return this._request(request);
  }

  /**
   * 获取设置
   * @param {string} key - 设置键
   * @param {any} defaultValue - 默认值
   * @returns {Promise<any>}
   */
  async getSetting(key, defaultValue = null) {
    await this.init();
    
    const tx = this._transaction('settings', 'readonly');
    const store = this._store(tx, 'settings');
    const request = store.get(key);
    
    const result = await this._request(request);
    return result ? result.value : defaultValue;
  }

  /**
   * 删除设置
   * @param {string} key - 设置键
   * @returns {Promise<void>}
   */
  async deleteSetting(key) {
    await this.init();
    
    const tx = this._transaction('settings', 'readwrite');
    const store = this._store(tx, 'settings');
    const request = store.delete(key);
    
    return this._request(request);
  }

  // ============================================================
  // 应用状态（当前选中的ID等）
  // ============================================================

  /**
   * 保存应用状态
   * @param {string} key - 状态键
   * @param {any} value - 状态值
   * @returns {Promise<void>}
   */
  async setAppState(key, value) {
    await this.init();
    
    const tx = this._transaction('appState', 'readwrite');
    const store = this._store(tx, 'appState');
    const request = store.put({ key, value, updatedAt: this._getTimestamp() });
    
    return this._request(request);
  }

  /**
   * 获取应用状态
   * @param {string} key - 状态键
   * @param {any} defaultValue - 默认值
   * @returns {Promise<any>}
   */
  async getAppState(key, defaultValue = null) {
    await this.init();
    
    const tx = this._transaction('appState', 'readonly');
    const store = this._store(tx, 'appState');
    const request = store.get(key);
    
    const result = await this._request(request);
    return result ? result.value : defaultValue;
  }

  // ============================================================
  // 批量操作（导入/导出）
  // ============================================================

  /**
   * 导出所有数据
   * @returns {Promise<Object>}
   */
  async exportAll() {
    await this.init();
    
    const vehicles = await this.getAllVehicles();
    const programs = await this.getAllPrograms();
    const maps = await this.getAllMaps();
    
    // 获取所有设置
    const tx = this._transaction('settings', 'readonly');
    const store = this._store(tx, 'settings');
    const settingsRequest = store.getAll();
    const settingsResult = await this._request(settingsRequest);
    const settings = {};
    settingsResult.forEach(s => settings[s.key] = s.value);

    return {
      version: this.dbVersion,
      exportedAt: this._getTimestamp(),
      vehicles,
      programs,
      maps,
      settings
    };
  }

  /**
   * 导入数据
   * @param {Object} data - 导出的数据
   * @returns {Promise<void>}
   */
  async importAll(data) {
    await this.init();
    
    // 导入车辆
    if (data.vehicles && Array.isArray(data.vehicles)) {
      for (const vehicle of data.vehicles) {
        await this.saveVehicle(vehicle);
      }
    }

    // 导入程序
    if (data.programs && Array.isArray(data.programs)) {
      for (const program of data.programs) {
        await this.saveProgram(program);
      }
    }

    // 导入地图
    if (data.maps && Array.isArray(data.maps)) {
      for (const map of data.maps) {
        await this.saveMap(map);
      }
    }

    // 导入设置
    if (data.settings && typeof data.settings === 'object') {
      for (const [key, value] of Object.entries(data.settings)) {
        await this.setSetting(key, value);
      }
    }

    console.log('[DB] Import completed');
  }

  /**
   * 清空所有数据
   * @returns {Promise<void>}
   */
  async clearAll() {
    await this.init();
    
    const stores = ['vehicles', 'programs', 'maps', 'settings', 'appState'];
    
    for (const storeName of stores) {
      const tx = this._transaction(storeName, 'readwrite');
      const store = this._store(tx, storeName);
      store.clear();
    }
    
    console.log('[DB] All data cleared');
  }
}

// 创建全局实例
window.pybricksDB = new PybricksDB();

// 初始化数据库
pybricksDB.init().catch(err => {
  console.error('[DB] Failed to initialize database:', err);
});
