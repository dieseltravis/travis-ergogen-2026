// Copyright 2023 QMK
// Copyright 2026 Travis Hardiman (@dieseltravis)
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

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
        KC_LCTL,          DF(0),   KC_LGUI, KC_LALT,          KC_SPC
        //                ^ TODO
    )
};
