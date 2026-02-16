// Copyright 2023 QMK
// Copyright 2026 Travis Hardiman (@dieseltravis)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

// Workaround for freezing after MacOS sleep
#define NO_USB_STARTUP_CHECK

/* key matrix size */
#define MATRIX_ROWS 6
#define MATRIX_COLS 7

#define OLED_BRIGHTNESS 128

#define WS2812_BYTE_ORDER WS2812_BYTE_ORDER_GRB
