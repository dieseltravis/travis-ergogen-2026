// Copyright 2023 QMK
// Copyright 2026 Travis Hardiman (@dieseltravis)
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

enum layers {
    _BASE = 0,
    _RIGT,
    _FUNC
};

#if defined(ENCODER_MAP_ENABLE)
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][NUM_DIRECTIONS] = {
    [_BASE] = { ENCODER_CCW_CW(KC_MS_WH_LEFT, KC_MS_WH_RIGHT) },
    [_BASE] = { ENCODER_CCW_CW(KC_MS_WH_UP, KC_MS_WH_DOWN) },
    [_FUNC] = { ENCODER_CCW_CW(RGB_VAD, RGB_VAI) }
};
#endif

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /*
     * ┌───┬───┬───┬───┬───┬───┬───┐
     * │Esc│ F1│ F2│ F3│ F4| F5| F6|
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │ ~ │ 1 │ 2 │ 3 │ 4 | 5 | 6 |
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │Tab│ Q │ W │ E │ R | T | Y |
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │Mut│ A │ S │ D │ F | G | H |
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │Sht│ Z │ X │ C │ V | B | N |
     * ├───┴───┼───┼───┼───┼───┴───┤
     * │ Ctrl  │Fun│Sup│Alt| Space |
     * └───────┴───┴───┴───┴───────┘
     */
    [0] = LAYOUT(
        KC_ESC,  KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,
        KC_GRV,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_6,
        KC_TAB,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,
        KC_MUTE, KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_H,
        KC_LSFT, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_N,
        KC_LCTL,          DF(1),   KC_LGUI, KC_LALT,          KC_SPC
    ),

    /*
     * ┌───┬───┬───┬───┬───┬───┬───┐
     * │ F7│ F8│ F9│F10│F11|F12|Del|
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │ 7 │ 8 │ 9 │ 0 │ - | = |BSp|
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │ U │ I │ O │ P │ [ | ] | \ |
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │ J │ K │ L │ ; │ ' | X1|Ent|
     * ├───┼───┼───┼───┼───┼───┼───┤
     * │ M │ , │ . │ / │ X2| X3|Sht|
     * ├───┴───┼───┼───┼───┼───┴───┤
     * │ Space │Alt│Men│Fun| Ctrl  |
     * └───────┴───┴───┴───┴───────┘
     */
    [1] = LAYOUT(
        KC_F7,   KC_F8,   KC_F9,   KC_F10,  KC_F11,  KC_F12,  KC_DEL,
        KC_7,    KC_8,    KC_9,    KC_0,    KC_MINS, KC_EQL,  KC_BSPC,
        KC_U,    KC_I,    KC_O,    KC_P,    KC_LBRC, KC_RBRC, KC_BSLS,
        KC_J,    KC_K,    KC_L,    KC_SCLN, KC_QUOT, PB_1,    KC_ENT,
        KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_HOME, KC_END,  KC_RSFT,
        KC_SPC,           KC_RALT, KC_APP,  DF(2),            KC_SPC
    ),

/* Wired Layout, RGB Layer:
*    0   1   2   3   4   5   6
*  ┌───┬───┬───┬───┬───┬───┬───┐
*  │   │   │   │   │   │   │   │
*RGB───┼───┼───┼───┼───┼───┼───┤
*Modes:│   │   │   │   │   │   │
*  ├───┼───┼───┼───┼───┼───┼───┤
*  │Md+│Hu+│Sa+│Va+│Sp+│   │   │
*  ├───┼───┼───┼───┼───┼───┼───┤
*  │Md-│Hu-│Sa-│Va-│Sp-│   │   │
*  ├───┼───┼───┼───┼───┼───┼───┤
*  │Tog│   │   │   │   │   │   │
*  ├───┴───┼───┼───┼───┼───┴───┤
*  │       │   │   │   │       │
*  └───────┴───┴───┴───┴───────┘
*/
  [2] = LAYOUT(
    KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
    KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
    RM_NEXT, RM_HUEU, RM_SATU, RM_VALU, RM_SPDU, RM_FLGN, KC_TRNS,
    RM_PREV, RM_HUED, RM_SATD, RM_VALD, RM_SPDD, RM_FLGP, KC_TRNS,
    RM_TOGG, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
    KC_TRNS,          DF(0),   KC_TRNS, DF(0),            KC_TRNS
  )
};
