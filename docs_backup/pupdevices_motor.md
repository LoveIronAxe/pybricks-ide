# Motors with rotation sensors — pybricks v3.6.1 documentation

| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |





# 

![]()

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (**) – Port to which the motor is connected.
- **** (**) – Which direction the motor should
turn when you give a positive speed value or
angle.
- **** (**) – List of gears linked to the motor. The gear connected
to the motor comes first and the gear connected to the output
comes last.
For example: `[12, 36]` represents a gear train with a
12-tooth gear connected to the motor and a 36-tooth gear
connected to the output. Use a list of lists for multiple
gear trains, such as `[[12, 36], [20, 16, 40]]`.
When you specify a gear train, all motor commands and settings
are automatically adjusted to account for the resulting gear
ratio. The motor direction remains unchanged by this.
- **** (**) – Choose `True` to reset the rotation sensor value to the
absolute marker angle (between -180 and 179).
Choose `False` to keep the
current value, so your program knows where it left off last
time.
- **** (******) – Precision profile. This is the approximate
position tolerance in degrees that is acceptable in your
application. A lower value gives more precise but more erratic
movement; a higher value gives less precise but smoother
movement. If no value is given, a suitable profile for this
motor type will be selected automatically (about 11 degrees).

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

**run_time(**, **, **, **)[]()

Parameters:
- **** (******) – Speed of the motor.
- **** (******) – Duration of the maneuver.
- **** (**) – What to do after coming to a standstill.
- **** (**) – Wait for the maneuver to complete before continuing
with the rest of the program.

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (******) – Speed of the motor.
- **** (******) – Angle by which the motor should
rotate.
- **** (**) – What to do after coming to a standstill.
- **** (**) – Wait for the maneuver to complete before continuing
with the rest of the program.

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (******) – Speed of the motor.
- **** (******) – Angle that the motor should rotate to.
- **** (**) – What to do after coming to a standstill.
- **** (**) – Wait for the motor to reach the target
before continuing with the rest of the program.

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (******) – Speed of the motor.
- **** (**) – What to do after coming to a standstill.
- **** (******) – Duty cycle limit during this
command. This is useful to avoid applying the full motor
torque to a geared or lever mechanism. If it is `None`, the
duty limit won’t be changed during this command.

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

done() → []()[]()

Returns:

.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:

close()[]()




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (**************) – Maximum speed. All speed commands will be capped to this value.
- **** (**************) – Slope of the speed curve when accelerating or decelerating.
Use a tuple to set acceleration and deceleration separately.
If one value is given, it is used for both.
- **** (torque: mNm) – Maximum feedback torque during control.




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





control.pid(**, **, **, **, **)[]()

control.pid() → Tuple[[](), [](), [](), [](), []()]

Parameters:
- **** (**) – Proportional position control
constant. It is the feedback torque per degree of
error: µNm/deg.
- **** (**) – Integral position control constant. It is the feedback
torque per accumulated degree of error: µNm/(deg s).
- **** (**) – Derivative position (or proportional speed) control
constant. It is the feedback torque per
unit of speed: µNm/(deg/s).
- **** (**************) – Zone around the
target where the error integral does not accumulate errors.
- **** (**************) – Maximum rate at
which the error integral is allowed to grow.




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>rect:not(.blocklyDropdownRect),
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>rect:not(.blocklyDropdownRect) {
fill: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyNonEditableText>g>text,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyEditableText>g>text {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyFlyoutLabelText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyText.blocklyBubbleText {
fill: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>rect,
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDraggable:not(.blocklyDisabled)
.blocklyEditableText:not(.editing):hover>.blocklyPath {
stroke: #fff;
stroke-width: 2;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHtmlInput {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
font-weight: bold;
color: #575E75;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDropdownText {
fill: #fff !important;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyWidgetDiv .goog-menuitem,
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem {
font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme.blocklyDropDownDiv .goog-menuitem-content {
color: #fff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyHighlightedConnectionPath {
stroke: #ffffff;
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyDisabled > .blocklyOutlinePath {
fill: url(#blocklyDisabledPattern8106945446883995)
}
.pybricks_renderer-renderer.pybricks-zelos-light-theme .blocklyInsertionMarker>.blocklyPath {
fill-opacity: 0.2;
stroke: none;
}

.blocklySvg {
background-color: #fff;
outline: none;
overflow: hidden;  /* IE overflows by default. */
position: absolute;
display: block;
}

.blocklyWidgetDiv {
display: none;
position: absolute;
z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
height: 100%;
position: relative;
overflow: hidden;  /* So blocks in drag surface disappear at edges */
touch-action: none;
}

.blocklyNonSelectable {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
transition: transform .5s;
}

.blocklyTooltipDiv {
background-color: #ffffc7;
border: 1px solid #ddc;
box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
color: #000;
display: none;
font: 9pt sans-serif;
opacity: .9;
padding: 2px;
position: absolute;
z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
position: absolute;
left: 0;
top: 0;
z-index: 1000;
display: none;
border: 1px solid;
border-color: #dadce0;
background-color: #fff;
border-radius: 2px;
padding: 4px;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
max-height: 300px;  /* @todo: spec for maximum height. */
overflow: auto;
overflow-x: hidden;
position: relative;
}

.blocklyDropDownArrow {
position: absolute;
left: 0;
top: 0;
width: 16px;
height: 16px;
z-index: -1;
background-color: inherit;
border-color: inherit;
}

.blocklyDropDownButton {
display: inline-block;
float: left;
padding: 0;
margin: 4px;
border-radius: 4px;
outline: none;
border: 1px solid;
transition: box-shadow .1s;
cursor: pointer;
}

.blocklyArrowTop {
border-top: 1px solid;
border-left: 1px solid;
border-top-left-radius: 4px;
border-color: inherit;
}

.blocklyArrowBottom {
border-bottom: 1px solid;
border-right: 1px solid;
border-bottom-right-radius: 4px;
border-color: inherit;
}

.blocklyResizeSE {
cursor: se-resize;
fill: #aaa;
}

.blocklyResizeSW {
cursor: sw-resize;
fill: #aaa;
}

.blocklyResizeLine {
stroke: #515A5A;
stroke-width: 1;
}

.blocklyHighlightedConnectionPath {
fill: none;
stroke: #fc3;
stroke-width: 4px;
}

.blocklyPathLight {
fill: none;
stroke-linecap: round;
stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
display: none;
}

.blocklyDraggable {
cursor: grab;
cursor: -webkit-grab;
}

.blocklyDragging {
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Changes cursor on mouse down. Not effective in Firefox because of
https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
cursor: grabbing;
cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
fill-opacity: .8;
stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
display: none;
}

.blocklyDisabled>.blocklyPath {
fill-opacity: .5;
stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
fill-opacity: .2;
stroke: none;
}

.blocklyMultilineText {
font-family: monospace;
}

.blocklyNonEditableText>text {
pointer-events: none;
}

.blocklyFlyout {
position: absolute;
z-index: 20;
}

.blocklyText text {
cursor: default;
}

/*
Don't allow users to select text.  It gets annoying when trying to
drag a block and selected text moves instead.
*/
.blocklySvg text {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: inherit;
}

.blocklyHidden {
display: none;
}

.blocklyFieldDropdown:not(.blocklyHidden) {
display: block;
}

.blocklyIconGroup {
cursor: default;
}

.blocklyIconGroup:not(:hover),
.blocklyIconGroupReadonly {
opacity: .6;
}

.blocklyIconShape {
fill: #00f;
stroke: #fff;
stroke-width: 1px;
}

.blocklyIconSymbol {
fill: #fff;
}

.blocklyMinimalBody {
margin: 0;
padding: 0;
}

.blocklyHtmlInput {
border: none;
border-radius: 4px;
height: 100%;
margin: 0;
outline: none;
padding: 0;
width: 100%;
text-align: center;
display: block;
box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}

.blocklyMainBackground {
stroke-width: 1;
stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
fill: #fff;
stroke: #ddd;
stroke-width: 1;
}

.blocklyFlyoutBackground {
fill: #ddd;
fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
z-index: 20;
}

.blocklyFlyoutScrollbar {
z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
position: absolute;
outline: none;
}

.blocklyScrollbarBackground {
opacity: 0;
}

.blocklyScrollbarHandle {
fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
fill: #aaa;
}

.blocklyInvalidInput {
background: #faa;
}

.blocklyVerticalMarker {
stroke-width: 3px;
fill: rgba(255,255,255,.5);
pointer-events: none;
}

.blocklyComputeCanvas {
position: absolute;
width: 0;
height: 0;
}

.blocklyNoPointerEvents {
pointer-events: none;
}

.blocklyContextMenu {
border-radius: 4px;
max-height: 100%;
}

.blocklyDropdownMenu {
border-radius: 2px;
padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
/* 28px on the left for icon or checkbox. */
padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
/* Flip left/right padding for BiDi. */
padding-left: 5px;
padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
background: #fff;
border: 1px solid transparent;
box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
font: normal 13px Arial, sans-serif;
margin: 0;
outline: none;
padding: 4px 0;
position: absolute;
overflow-y: auto;
overflow-x: hidden;
max-height: 100%;
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu.blocklyFocused {
box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
background: inherit;  /* Compatibility with gapi, reset from goog-menu */
border: inherit;  /* Compatibility with gapi, reset from goog-menu */
font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
outline: none;
position: relative;  /* Compatibility with gapi, reset from goog-menu */
z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
border: none;
color: #000;
cursor: pointer;
list-style: none;
margin: 0;
/* 7em on the right for shortcut. */
min-width: 7em;
padding: 6px 15px;
white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
color: #ccc;
cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemCheckbox {
height: 16px;
position: absolute;
width: 16px;
}

.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
background: url(https://blockly-demo.appspot.com/static/media/sprites.png) no-repeat -48px -16px;
float: left;
margin-left: -24px;
position: static;  /* Scroll with the menu. */
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
float: right;
margin-right: -24px;
}

.blocklyZoom>image, .blocklyZoom>svg>image {
opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
opacity: .8;
}

.blocklyCommentForeignObject {
position: relative;
z-index: 0;
}

.blocklyCommentRect {
fill: #E7DE8E;
stroke: #bcA903;
stroke-width: 1px;
}

.blocklyCommentTarget {
fill: transparent;
stroke: #bcA903;
}

.blocklyCommentTargetFocused {
fill: none;
}

.blocklyCommentHandleTarget {
fill: none;
}

.blocklyCommentHandleTargetFocused {
fill: transparent;
}

.blocklyFocused>.blocklyCommentRect {
fill: #B9B272;
stroke: #B9B272;
}

.blocklySelected>.blocklyCommentTarget {
stroke: #fc3;
stroke-width: 3px;
}

.blocklyCommentDeleteIcon {
cursor: pointer;
fill: #000;
display: none;
}

.blocklySelected > .blocklyCommentDeleteIcon {
display: block;
}

.blocklyDeleteIconShape {
fill: #000;
stroke: #000;
stroke-width: 1px;
}

.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {
stroke: #fc3;
}

.blocklyCommentTextarea {
background-color: #fef49c;
border: 0;
display: block;
margin: 0;
outline: 0;
padding: 3px;
resize: none;
text-overflow: hidden;
}

.blocklyAngleCircle {
stroke: #444;
stroke-width: 1;
fill: #ddd;
fill-opacity: 0.8;
}

.blocklyAngleMarks {
stroke: #444;
stroke-width: 1;
}

.blocklyAngleGauge {
fill: #f88;
fill-opacity: 0.8;
pointer-events: none;
}

.blocklyAngleLine {
stroke: #f00;
stroke-width: 2;
stroke-linecap: round;
pointer-events: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.blocklyHtmlTextAreaInput {
font-family: monospace;
resize: none;
overflow: hidden;
height: 100%;
text-align: left;
}

.blocklyHtmlTextAreaInputOverflowedY {
overflow-y: scroll;
}

.blocklyFlyoutButton {
fill: #888;
cursor: default;
}

.blocklyFlyoutButtonShadow {
fill: #666;
}

.blocklyFlyoutButton:hover {
fill: #aaa;
}

.blocklyFlyoutLabel {
cursor: default;
}

.blocklyFlyoutLabelBackground {
opacity: 0;
}

.blocklyTreeRow:not(.blocklyTreeSelected):hover {
background-color: rgba(255, 255, 255, .2);
}

.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
margin: 1px 5px 1px 0;
}

.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
margin: 1px 0 1px 5px;
}

.blocklyTreeRow {
height: 22px;
line-height: 22px;
margin-bottom: 3px;
padding-right: 8px;
white-space: nowrap;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
margin-left: 8px;
padding-right: 0;
}

.blocklyTreeIcon {
background-image: url(https://blockly-demo.appspot.com/static/media/sprites.png);
height: 16px;
vertical-align: middle;
visibility: hidden;
width: 16px;
}

.blocklyTreeIconClosed {
background-position: -32px -1px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
background-position: 0 -1px;
}

.blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: -32px -17px;
}

.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
background-position: 0 -17px;
}

.blocklyTreeIconOpen {
background-position: -16px -1px;
}

.blocklyTreeSelected>.blocklyTreeIconOpen {
background-position: -16px -17px;
}

.blocklyTreeLabel {
cursor: default;
font: 16px sans-serif;
padding: 0 3px;
vertical-align: middle;
}

.blocklyToolboxDelete .blocklyTreeLabel {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyTreeSelected .blocklyTreeLabel {
color: #fff;
}

.blocklyTreeSeparator {
border-bottom: solid #e5e5e5 1px;
height: 0;
margin: 5px 0;
}

.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
border-right: solid #e5e5e5 1px;
border-bottom: none;
height: auto;
margin: 0 5px 0 5px;
padding: 5px 0;
width: 0;
}

.blocklyToolboxDelete {
cursor: url("https://blockly-demo.appspot.com/static/media/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
cursor: url("https://blockly-demo.appspot.com/static/media/handclosed.cur"), auto;
cursor: grabbing;
cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolboxDiv {
background-color: #ddd;
overflow-x: visible;
overflow-y: auto;
padding: 4px 0 4px 0;
position: absolute;
z-index: 70;  /* so blocks go under toolbox when dragging */
-webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxContents {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.blocklyToolboxContents:focus {
outline: none;
}

.blocklyColourTable {
border-collapse: collapse;
display: block;
outline: none;
padding: 1px;
}

.blocklyColourTable>tr>td {
border: 0.5px solid #888;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
height: 20px;
padding: 0;
width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
border-color: #eee;
box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
border-color: #eee !important;
outline: 1px solid #333;
position: relative;
}

.fieldColourSliderContainer {
padding: 4px;
}
.fieldColourSliderContainer hr {
border: none;
border-top: 1px solid #bbb;
}
.fieldColourSliderLabel {
display: flex;
justify-content: space-between;
font: 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
}
.fieldColourEyedropper {
appearance: none;
position: relative;
border: none;
border-radius: 4px;
background: transparent;
font: inherit;
color: inherit;
cursor: pointer;
width: 100%;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
}
.fieldColourEyedropper:hover {
background: rgba(0,0,0,0.1)
}
.fieldColourEyedropper input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.fieldColourEyedropper::before {
content: "Eyedropper";
}
.fieldColourEyedropper::after {
content: "";
margin-left: 8px;
width: 24px;
height: 24px;
background: currentColor;
pointer-events: none;
-webkit-mask-image: var(--customize-dial-symbol);
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
mask-image: var(--customize-dial-symbol);
mask-repeat: no-repeat;
mask-position: center;
--customize-dial-symbol: url('data:image/svg+xml,    <svg xmlns="http://www.w3.org/2000/svg"          width="24px" height="24px"          viewBox="0 0 24 24">       <path stroke="black" strokewidth="1.414" fill="none"             d="m 13 8 L 6 15 Q 3 18 2 21 Q 0 23 .5 23.5 Q 1 24 3 22                 Q 6 21 9 18 L 16 11"/>       <path fill="black"             d="m 12 7 Q 11 6 12 5 Q 13 4 14 5 Q 15 6 16 5 Q 20 -1 22.5 1.5                 Q 25 4 19 8 Q 18 9 19 10 Q 20 11 19 12 Q 18 13 17 12"/>     </svg>');
}
.fieldColourSlider {
-webkit-appearance: none;
width: 150px;
height: 24px;
margin: 4px 8px 24px 8px;
padding: 0;
}
.fieldColourSlider:last-child {
margin-bottom: 4px;
}
.fieldColourSlider:focus {
outline: none;
}
/* Webkit */
.fieldColourSlider::-webkit-slider-runnable-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-webkit-slider-thumb {
-webkit-appearance: none;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
margin-top: -4px;
}
/* Firefox */
.fieldColourSlider::-moz-range-track {
background: var(--slider-track-background);
border-radius: 8px;
height: 16px;
}
.fieldColourSlider::-moz-range-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}
.fieldColourSlider::-moz-focus-outer {
/* override the focus border style */
border: 0;
}
/* IE */
.fieldColourSlider::-ms-track {
background: var(--slider-track-background);
border-radius: 12px;
width: 100%;
height: 24px;
/* remove default tick marks */
color: transparent;
}
.fieldColourSlider::-ms-fill-lower  {
background: transparent;
}
.fieldColourSlider::-ms-fill-upper  {
background: transparent;
}
.fieldColourSlider::-ms-thumb {
background: #fff;
border: none;
border-radius: 50%;
box-shadow: 0 0 0 4px rgba(0,0,0,.15);
cursor: pointer;
width: 24px;
height: 24px;
}

.controlsIconStyle {
opacity: 0.2;
}
.controlsIconStyle:hover {
opacity: 0.4;
}
.controlsIconStyle:active {
opacity: 0.6;
}


.blocklyMultiselect>image, .blocklyMultiselect>svg>image {
opacity: .2;
}

.blocklyMultiselect>image:hover, .blocklyMultiselect>svg>image:hover {
opacity: .4;
}

.blocklyMultiselect>image:active, .blocklyMultiselect>svg>image:active {
opacity: .6;
}

Parameters:
- **** (**************) – Allowed deviation
from zero speed before motion is considered complete.
- **** (Number, deg or distance: mm) – Allowed
deviation from the target before motion is considered
complete.




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





control.stall_tolerances(**, **)[]()

control.stall_tolerances() → Tuple[[](), []()]

Parameters:
- **** (**************) – If the controller
cannot reach this speed for some `time` even with maximum
actuation, it is stalled.
- **** (******) – How long the controller has to be below this
minimum `speed` before we say it is stalled.




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





control.scale[]()




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





model.state() → Tuple[[](), [](), [](), []()][]()

Returns:




| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |





model.settings(**)[]()

model.settings() → Tuple

Parameters:

## 

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Make the motor run clockwise at 500 degrees per second.
example_motor.run(500)

# Wait for three seconds.
wait(3000)

# Make the motor run counterclockwise at 500 degrees per second.
example_motor.run(-500)

# Wait for three seconds.
wait(3000)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize motors on port A and B.
track_motor = Motor(Port.A)
gripper_motor = Motor(Port.B)

# Make both motors run at 500 degrees per second.
track_motor.run(500)
gripper_motor.run(500)

# Wait for three seconds.
wait(3000)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port, Direction
from pybricks.tools import wait

# Initialize a motor on port A with the positive direction as counterclockwise.
example_motor = Motor(Port.A, Direction.COUNTERCLOCKWISE)

# When we choose a positive speed value, the motor now goes counterclockwise.
example_motor.run(500)

# This is useful when your motor is mounted in reverse or upside down.
# By changing the positive direction, your script will be easier to read,
# because a positive value now makes your robot/mechanism go forward.

# Wait for three seconds.
wait(3000)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port, Direction
from pybricks.tools import wait

# Initialize a motor on port A with the positive direction as counterclockwise.
# Also specify one gear train with a 12-tooth and a 36-tooth gear. The 12-tooth
# gear is attached to the motor axle. The 36-tooth gear is at the output axle.
geared_motor = Motor(Port.A, Direction.COUNTERCLOCKWISE, [12, 36])

# Make the output axle run at 100 degrees per second. The motor speed
# is automatically increased to compensate for the gears.
geared_motor.run(100)

# Wait for three seconds.
wait(3000)

## 

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Start moving at 300 degrees per second.
example_motor.run(300)

# Display the angle and speed 50 times.
for i in range(100):

# Read the angle (degrees) and speed (degrees per second).
angle = example_motor.angle()
speed = example_motor.speed()

# Print the values.
print(angle, speed)

# Wait some time so we can read what is displayed.
wait(200)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Reset the angle to 0.
example_motor.reset_angle(0)

# Reset the angle to 1234.
example_motor.reset_angle(1234)

# Reset the angle to the absolute angle.
# This is only supported on motors that have
# an absolute encoder. For other motors, this
# will raise an error.
example_motor.reset_angle()

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

while True:

# Get the default angle value.
angle = example_motor.angle()

# Get the angle between 0 and 360.
absolute_angle = example_motor.angle() % 360

# Get the angle between -180 and 179.
wrapped_angle = (example_motor.angle() + 180) % 360 - 180

# Print the results.
print(angle, absolute_angle, wrapped_angle)
wait(100)

## 

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Run at 500 deg/s and then stop by coasting.
print("Demo of run")
example_motor.run(500)
wait(1500)
example_motor.stop()
wait(1500)

# Run at 50% duty cycle ("power") and then stop by coasting.
print("Demo of dc")
example_motor.dc(50)
wait(1500)
example_motor.stop()
wait(1500)

# Run at 500 deg/s for two seconds.
print("Demo of run_time")
example_motor.run_time(500, 2000)
wait(1500)

# Run at 500 deg/s for 90 degrees.
print("Demo of run_angle")
example_motor.run_angle(500, 90)
wait(1500)

# Run at 500 deg/s back to the 0 angle
print("Demo of run_target to 0")
example_motor.run_target(500, 0)
wait(1500)

# Run at 500 deg/s back to the -90 angle
print("Demo of run_target to -90")
example_motor.run_target(500, -90)
wait(1500)

# Run at 500 deg/s until the motor stalls
print("Demo of run_until_stalled")
example_motor.run_until_stalled(500)
print("Done")
wait(1500)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Run at 500 deg/s and then stop by coasting.
example_motor.run(500)
wait(1500)
example_motor.stop()
wait(1500)

# Run at 500 deg/s and then stop by braking.
example_motor.run(500)
wait(1500)
example_motor.brake()
wait(1500)

# Run at 500 deg/s and then stop by holding.
example_motor.run(500)
wait(1500)
example_motor.hold()
wait(1500)

# Run at 500 deg/s and then stop by running at 0 speed.
example_motor.run(500)
wait(1500)
example_motor.run(0)
wait(1500)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port, Stop
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# By default, the motor holds the position. It keeps
# correcting the angle if you move it.
example_motor.run_angle(500, 360)
wait(1000)

# This does exactly the same as above.
example_motor.run_angle(500, 360, then=Stop.HOLD)
wait(1000)

# You can also brake. This applies some resistance
# but the motor does not move back if you move it.
example_motor.run_angle(500, 360, then=Stop.BRAKE)
wait(1000)

# This makes the motor coast freely after it stops.
example_motor.run_angle(500, 360, then=Stop.COAST)
wait(1000)

## 

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# We'll use a speed of 200 deg/s in all our commands.
speed = 200

# Run the motor in reverse until it hits a mechanical stop.
# The duty_limit=30 setting means that it will apply only 30%
# of the maximum torque against the mechanical stop. This way,
# you don't push against it with too much force.
example_motor.run_until_stalled(-speed, duty_limit=30)

# Reset the angle to 0. Now whenever the angle is 0, you know
# that it has reached the mechanical endpoint.
example_motor.reset_angle(0)

# Now make the motor go back and forth in a loop.
# This will now work the same regardless of the
# initial motor angle, because we always start
# from the mechanical endpoint.
for count in range(10):
example_motor.run_target(speed, 180)
example_motor.run_target(speed, 90)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize a motor on port A.
example_motor = Motor(Port.A)

# Please have a look at the previous example first. This example
# finds two endspoints and then makes the middle the zero point.

# The run_until_stalled gives us the angle at which it stalled.
# We want to know this value for both endpoints.
left_end = example_motor.run_until_stalled(-200, duty_limit=30)
right_end = example_motor.run_until_stalled(200, duty_limit=30)

# We have just moved to the rightmost endstop. So, we can reset
# this angle to be half the distance between the two endpoints.
# That way, the middle corresponds to 0 degrees.
example_motor.reset_angle((right_end - left_end) / 2)

# From now on we can simply run towards zero to reach the middle.
example_motor.run_target(200, 0)

wait(1000)

## 

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port

# Initialize motors on port A and B.
track_motor = Motor(Port.A)
gripper_motor = Motor(Port.B)

# Make the track motor start moving,
# but don't wait for it to finish.
track_motor.run_angle(500, 360, wait=False)

# Now make the gripper motor rotate. This
# means they move at the same time.
gripper_motor.run_angle(200, 720)

### 

from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize motors on port A and B.
track_motor = Motor(Port.A)
gripper_motor = Motor(Port.B)

# Make both motors perform an action with wait=False
track_motor.run_angle(500, 360, wait=False)
gripper_motor.run_angle(200, 720, wait=False)

# While one or both of the motors are not done yet,
# do something else. In this example, just wait.
while not track_motor.done() or not gripper_motor.done():
wait(10)

print("Both motors are done!")