/**
 * NOTE TO DEVS:
 *
 * Spacing should be consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 *
 * If you've got simpler app, you may only need 6 items.  Or maybe you want a spacing scale
 * to be named:
 *
 * export const spacing = {
 *   tiny: 4,
 *   small: 8,
 *   medium: 12,
 *   large: 24,
 *   huge: 64
 * }
 *
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 * Feel free to delete this block.
 */

import { responsive } from "@Utils"

/**
 * The available spacing.
 *
 * Here's the rough guideline.  Customize this for you usage.  It's ok to put exceptions
 * within the components themselves if they are truly exceptions.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = tiny    - elements contextually close to each other
 * 2 = smaller - for groups of closely related items or perhaps borders
 * 3 = small   - ?
 * 4 = medium  - ?
 * 5 = medium+ - ?
 * 6 = large   - between groups of content that aren't related?
 * 7 = huge    - ?
 * 8 = massive - an uncomfortable amount of whitespace
 */
export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64]

export const spacingObj = {
  tiny: 4,
  small: 8,
  medium: 12,
  large: 24,
  huge: 64,
  "w:4": responsive.width(4),
  "w:14": responsive.width(14),
  "w:41": responsive.width(41),
  "w:98": responsive.width(98),
  "s:77": responsive.width(77),
  "h:22": responsive.width(22),
  "h:58": responsive.height(58),
  "h:14": responsive.height(14),
  "s:80": responsive.width(80),
  "s:110": responsive.width(110),
  "h:110": responsive.height(110),
  "h:51": responsive.height(51),
  "h:71": responsive.height(71),
  "h:296": responsive.height(296),
  "h:300": responsive.height(300),
  "h:375": responsive.height(375),
  "h:377": responsive.height(377),
  "h:710": responsive.height(710),
  "s:88": responsive.width(88),
  "s:22": responsive.width(22),
  "s:26": responsive.width(26),
  "s:59": responsive.width(59),
  "s:106": responsive.width(106),
  "s:39": responsive.width(39),
  "s:120": responsive.width(120),
  "s:123": responsive.width(123),
  "s:219": responsive.width(219),
  "s:102": responsive.width(102),
  "s:126": responsive.width(126),
  "h:126": responsive.height(126),
  "s:84": responsive.width(84),
  "s:42": responsive.width(42),
  "h:28": responsive.width(28),
  "s:141": responsive.width(141),
  "s:187": responsive.width(187),
  "h:50": responsive.height(50),
  "s:72": responsive.height(72),
  "s:122": responsive.width(122),
  "s:201": responsive.width(201),
  "s:150": responsive.width(150),
  "s:32": responsive.width(32),
  "s:114": responsive.width(114),
  "s:10": responsive.width(10),
  "s:30": responsive.width(30),
  "w:8": responsive.width(8),
  "w:119": responsive.width(119),
  "w:61": responsive.width(61),
  "w:57": responsive.width(57),
  "w:27": responsive.width(27),
  "w:75": responsive.width(75),
  "h:24": responsive.width(24),
  "s:0": 0,
  "h:25": responsive.height(24),
  "h:35": responsive.height(35),
  "w:36": responsive.width(36),
  "s:24": responsive.width(24),
  "wn:45": responsive.widthNew0(45),
  "wn:35": responsive.widthNew0(35),
  "wn:30": responsive.widthNew0(30),
  "wn:25": responsive.widthNew0(25),
  "wn:22": responsive.widthNew0(22),
  "wn:16": responsive.widthNew0(16),
  "wn:6": responsive.widthNew0(6),
  "wn:2": responsive.widthNew0(2),
  "wn:4": responsive.widthNew0(4),
  "wn:9": responsive.widthNew0(9),
  "wn:10": responsive.widthNew0(10),
  "wn:5": responsive.widthNew0(5),
  "wn:32": responsive.widthNew0(32),
  "wn:21": responsive.widthNew0(21),
  "wn:12": responsive.widthNew0(12),
  "wn:14": responsive.widthNew0(14),
  "sn:19": responsive.widthNew0(19),
  "sn:14": responsive.widthNew0(14),
  "sn:26": responsive.widthNew0(26),
  "hn:60": responsive.heightNew0(60),
  "hn:100": responsive.heightNew0(100),
  "hn:10": responsive.heightNew0(10),
}
