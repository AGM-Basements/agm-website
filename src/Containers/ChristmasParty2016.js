import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import AGM2017_001 from '../Assets/Images/HollywoodParty/AGM2017_001.jpg';
import AGM2017_002 from '../Assets/Images/HollywoodParty/AGM2017_002.jpg';
import AGM2017_003 from '../Assets/Images/HollywoodParty/AGM2017_003.jpg';
import AGM2017_004 from '../Assets/Images/HollywoodParty/AGM2017_004.jpg';
import AGM2017_005 from '../Assets/Images/HollywoodParty/AGM2017_005.jpg';
import AGM2017_006 from '../Assets/Images/HollywoodParty/AGM2017_006.jpg';
import AGM2017_007 from '../Assets/Images/HollywoodParty/AGM2017_007.jpg';
import AGM2017_008 from '../Assets/Images/HollywoodParty/AGM2017_008.jpg';
import AGM2017_009 from '../Assets/Images/HollywoodParty/AGM2017_009.jpg';
import AGM2017_010 from '../Assets/Images/HollywoodParty/AGM2017_010.jpg';
import AGM2017_011 from '../Assets/Images/HollywoodParty/AGM2017_011.jpg';
import AGM2017_012 from '../Assets/Images/HollywoodParty/AGM2017_012.jpg';
import AGM2017_013 from '../Assets/Images/HollywoodParty/AGM2017_013.jpg';
import AGM2017_014 from '../Assets/Images/HollywoodParty/AGM2017_014.jpg';
import AGM2017_015 from '../Assets/Images/HollywoodParty/AGM2017_015.jpg';
import AGM2017_016 from '../Assets/Images/HollywoodParty/AGM2017_016.jpg';
import AGM2017_017 from '../Assets/Images/HollywoodParty/AGM2017_017.jpg';
import AGM2017_018 from '../Assets/Images/HollywoodParty/AGM2017_018.jpg';
import AGM2017_019 from '../Assets/Images/HollywoodParty/AGM2017_019.jpg';
import AGM2017_020 from '../Assets/Images/HollywoodParty/AGM2017_020.jpg';
import AGM2017_021 from '../Assets/Images/HollywoodParty/AGM2017_021.jpg';
import AGM2017_022 from '../Assets/Images/HollywoodParty/AGM2017_022.jpg';
import AGM2017_023 from '../Assets/Images/HollywoodParty/AGM2017_023.jpg';
import AGM2017_024 from '../Assets/Images/HollywoodParty/AGM2017_024.jpg';
import AGM2017_025 from '../Assets/Images/HollywoodParty/AGM2017_025.jpg';
import AGM2017_026 from '../Assets/Images/HollywoodParty/AGM2017_026.jpg';
import AGM2017_027 from '../Assets/Images/HollywoodParty/AGM2017_027.jpg';
import AGM2017_028 from '../Assets/Images/HollywoodParty/AGM2017_028.jpg';
import AGM2017_029 from '../Assets/Images/HollywoodParty/AGM2017_029.jpg';
import AGM2017_030 from '../Assets/Images/HollywoodParty/AGM2017_030.jpg';
import AGM2017_031 from '../Assets/Images/HollywoodParty/AGM2017_031.jpg';
import AGM2017_032 from '../Assets/Images/HollywoodParty/AGM2017_032.jpg';
import AGM2017_033 from '../Assets/Images/HollywoodParty/AGM2017_033.jpg';
import AGM2017_034 from '../Assets/Images/HollywoodParty/AGM2017_034.jpg';
import AGM2017_035 from '../Assets/Images/HollywoodParty/AGM2017_035.jpg';
import AGM2017_036 from '../Assets/Images/HollywoodParty/AGM2017_036.jpg';
import AGM2017_037 from '../Assets/Images/HollywoodParty/AGM2017_037.jpg';
import AGM2017_038 from '../Assets/Images/HollywoodParty/AGM2017_038.jpg';
import AGM2017_039 from '../Assets/Images/HollywoodParty/AGM2017_039.jpg';
import AGM2017_040 from '../Assets/Images/HollywoodParty/AGM2017_040.jpg';
import AGM2017_041 from '../Assets/Images/HollywoodParty/AGM2017_041.jpg';
import AGM2017_042 from '../Assets/Images/HollywoodParty/AGM2017_042.jpg';
import AGM2017_043 from '../Assets/Images/HollywoodParty/AGM2017_043.jpg';
import AGM2017_044 from '../Assets/Images/HollywoodParty/AGM2017_044.jpg';
import AGM2017_045 from '../Assets/Images/HollywoodParty/AGM2017_045.jpg';
import AGM2017_046 from '../Assets/Images/HollywoodParty/AGM2017_046.jpg';
import AGM2017_047 from '../Assets/Images/HollywoodParty/AGM2017_047.jpg';
import AGM2017_048 from '../Assets/Images/HollywoodParty/AGM2017_048.jpg';
import AGM2017_049 from '../Assets/Images/HollywoodParty/AGM2017_049.jpg';
import AGM2017_050 from '../Assets/Images/HollywoodParty/AGM2017_050.jpg';
import AGM2017_051 from '../Assets/Images/HollywoodParty/AGM2017_051.jpg';
import AGM2017_052 from '../Assets/Images/HollywoodParty/AGM2017_052.jpg';
import AGM2017_053 from '../Assets/Images/HollywoodParty/AGM2017_053.jpg';
import AGM2017_054 from '../Assets/Images/HollywoodParty/AGM2017_054.jpg';
import AGM2017_055 from '../Assets/Images/HollywoodParty/AGM2017_055.jpg';
import AGM2017_056 from '../Assets/Images/HollywoodParty/AGM2017_056.jpg';
import AGM2017_057 from '../Assets/Images/HollywoodParty/AGM2017_057.jpg';
import AGM2017_058 from '../Assets/Images/HollywoodParty/AGM2017_058.jpg';
import AGM2017_059 from '../Assets/Images/HollywoodParty/AGM2017_059.jpg';
import AGM2017_060 from '../Assets/Images/HollywoodParty/AGM2017_060.jpg';
import AGM2017_061 from '../Assets/Images/HollywoodParty/AGM2017_061.jpg';
import AGM2017_062 from '../Assets/Images/HollywoodParty/AGM2017_062.jpg';
import AGM2017_063 from '../Assets/Images/HollywoodParty/AGM2017_063.jpg';
import AGM2017_064 from '../Assets/Images/HollywoodParty/AGM2017_064.jpg';
import AGM2017_065 from '../Assets/Images/HollywoodParty/AGM2017_065.jpg';
import AGM2017_066 from '../Assets/Images/HollywoodParty/AGM2017_066.jpg';
import AGM2017_067 from '../Assets/Images/HollywoodParty/AGM2017_067.jpg';
import AGM2017_068 from '../Assets/Images/HollywoodParty/AGM2017_068.jpg';
import AGM2017_069 from '../Assets/Images/HollywoodParty/AGM2017_069.jpg';
import AGM2017_070 from '../Assets/Images/HollywoodParty/AGM2017_070.jpg';
import AGM2017_071 from '../Assets/Images/HollywoodParty/AGM2017_071.jpg';
import AGM2017_072 from '../Assets/Images/HollywoodParty/AGM2017_072.jpg';
import AGM2017_073 from '../Assets/Images/HollywoodParty/AGM2017_073.jpg';
import AGM2017_074 from '../Assets/Images/HollywoodParty/AGM2017_074.jpg';
import AGM2017_075 from '../Assets/Images/HollywoodParty/AGM2017_075.jpg';
import AGM2017_076 from '../Assets/Images/HollywoodParty/AGM2017_076.jpg';
import AGM2017_077 from '../Assets/Images/HollywoodParty/AGM2017_077.jpg';
import AGM2017_078 from '../Assets/Images/HollywoodParty/AGM2017_078.jpg';
import AGM2017_079 from '../Assets/Images/HollywoodParty/AGM2017_079.jpg';
import AGM2017_080 from '../Assets/Images/HollywoodParty/AGM2017_080.jpg';
import AGM2017_081 from '../Assets/Images/HollywoodParty/AGM2017_081.jpg';
import AGM2017_082 from '../Assets/Images/HollywoodParty/AGM2017_082.jpg';
import AGM2017_084 from '../Assets/Images/HollywoodParty/AGM2017_084.jpg';
import AGM2017_085 from '../Assets/Images/HollywoodParty/AGM2017_085.jpg';
import AGM2017_086 from '../Assets/Images/HollywoodParty/AGM2017_086.jpg';
import AGM2017_087 from '../Assets/Images/HollywoodParty/AGM2017_087.jpg';
import AGM2017_088 from '../Assets/Images/HollywoodParty/AGM2017_088.jpg';
import AGM2017_089 from '../Assets/Images/HollywoodParty/AGM2017_089.jpg';
import AGM2017_091 from '../Assets/Images/HollywoodParty/AGM2017_091.jpg';
import AGM2017_092 from '../Assets/Images/HollywoodParty/AGM2017_092.jpg';
import AGM2017_093 from '../Assets/Images/HollywoodParty/AGM2017_093.jpg';
import AGM2017_094 from '../Assets/Images/HollywoodParty/AGM2017_094.jpg';
import AGM2017_095 from '../Assets/Images/HollywoodParty/AGM2017_095.jpg';
import AGM2017_096 from '../Assets/Images/HollywoodParty/AGM2017_096.jpg';
import AGM2017_097 from '../Assets/Images/HollywoodParty/AGM2017_097.jpg';
import AGM2017_098 from '../Assets/Images/HollywoodParty/AGM2017_098.jpg';
import AGM2017_099 from '../Assets/Images/HollywoodParty/AGM2017_099.jpg';
import AGM2017_100 from '../Assets/Images/HollywoodParty/AGM2017_100.jpg';
import AGM2017_101 from '../Assets/Images/HollywoodParty/AGM2017_101.jpg';
import AGM2017_102 from '../Assets/Images/HollywoodParty/AGM2017_102.jpg';
import AGM2017_104 from '../Assets/Images/HollywoodParty/AGM2017_104.jpg';
import AGM2017_105 from '../Assets/Images/HollywoodParty/AGM2017_105.jpg';
import AGM2017_106 from '../Assets/Images/HollywoodParty/AGM2017_106.jpg';
import AGM2017_107 from '../Assets/Images/HollywoodParty/AGM2017_107.jpg';
import AGM2017_109 from '../Assets/Images/HollywoodParty/AGM2017_109.jpg';
import AGM2017_110 from '../Assets/Images/HollywoodParty/AGM2017_110.jpg';
import AGM2017_111 from '../Assets/Images/HollywoodParty/AGM2017_111.jpg';
import AGM2017_112 from '../Assets/Images/HollywoodParty/AGM2017_112.jpg';
import AGM2017_114 from '../Assets/Images/HollywoodParty/AGM2017_114.jpg';
import AGM2017_115 from '../Assets/Images/HollywoodParty/AGM2017_115.jpg';
import AGM2017_116 from '../Assets/Images/HollywoodParty/AGM2017_116.jpg';
import AGM2017_117 from '../Assets/Images/HollywoodParty/AGM2017_117.jpg';
import AGM2017_118 from '../Assets/Images/HollywoodParty/AGM2017_118.jpg';
import AGM2017_119 from '../Assets/Images/HollywoodParty/AGM2017_119.jpg';
import AGM2017_121 from '../Assets/Images/HollywoodParty/AGM2017_121.jpg';
import AGM2017_0121 from '../Assets/Images/HollywoodParty/AGM2017_0121.jpg';
import AGM2017_122 from '../Assets/Images/HollywoodParty/AGM2017_122.jpg';
import AGM2017_123 from '../Assets/Images/HollywoodParty/AGM2017_123.jpg';
import AGM2017_124 from '../Assets/Images/HollywoodParty/AGM2017_124.jpg';
import AGM2017_125 from '../Assets/Images/HollywoodParty/AGM2017_125.jpg';
import AGM2017_126 from '../Assets/Images/HollywoodParty/AGM2017_126.jpg';
import AGM2017_127 from '../Assets/Images/HollywoodParty/AGM2017_127.jpg';
import AGM2017_128 from '../Assets/Images/HollywoodParty/AGM2017_128.jpg';
import AGM2017_129 from '../Assets/Images/HollywoodParty/AGM2017_129.jpg';
import AGM2017_130 from '../Assets/Images/HollywoodParty/AGM2017_130.jpg';
import AGM2017_131 from '../Assets/Images/HollywoodParty/AGM2017_131.jpg';
import AGM2017_132 from '../Assets/Images/HollywoodParty/AGM2017_132.jpg';
import AGM2017_133 from '../Assets/Images/HollywoodParty/AGM2017_133.jpg';
import AGM2017_134 from '../Assets/Images/HollywoodParty/AGM2017_134.jpg';
import AGM2017_135 from '../Assets/Images/HollywoodParty/AGM2017_135.jpg';
import AGM2017_136 from '../Assets/Images/HollywoodParty/AGM2017_136.jpg';
import AGM2017_137 from '../Assets/Images/HollywoodParty/AGM2017_137.jpg';
import AGM2017_138 from '../Assets/Images/HollywoodParty/AGM2017_138.jpg';
import AGM2017_139 from '../Assets/Images/HollywoodParty/AGM2017_139.jpg';
import AGM2017_142 from '../Assets/Images/HollywoodParty/AGM2017_142.jpg';
import AGM2017_143 from '../Assets/Images/HollywoodParty/AGM2017_143.jpg';
import AGM2017_144 from '../Assets/Images/HollywoodParty/AGM2017_144.jpg';
import AGM2017_145 from '../Assets/Images/HollywoodParty/AGM2017_145.jpg';
import AGM2017_146 from '../Assets/Images/HollywoodParty/AGM2017_146.jpg';
import AGM2017_147 from '../Assets/Images/HollywoodParty/AGM2017_147.jpg';
import AGM2017_148 from '../Assets/Images/HollywoodParty/AGM2017_148.jpg';
import AGM2017_149 from '../Assets/Images/HollywoodParty/AGM2017_149.jpg';
import AGM2017_150 from '../Assets/Images/HollywoodParty/AGM2017_150.jpg';
import AGM2017_151 from '../Assets/Images/HollywoodParty/AGM2017_151.jpg';
import AGM2017_152 from '../Assets/Images/HollywoodParty/AGM2017_152.jpg';
import AGM2017_153 from '../Assets/Images/HollywoodParty/AGM2017_153.jpg';
import AGM2017_154 from '../Assets/Images/HollywoodParty/AGM2017_154.jpg';
import AGM2017_155 from '../Assets/Images/HollywoodParty/AGM2017_155.jpg';
import AGM2017_156 from '../Assets/Images/HollywoodParty/AGM2017_156.jpg';
import AGM2017_157 from '../Assets/Images/HollywoodParty/AGM2017_157.jpg';
import AGM2017_158 from '../Assets/Images/HollywoodParty/AGM2017_158.jpg';
import AGM2017_159 from '../Assets/Images/HollywoodParty/AGM2017_159.jpg';
import AGM2017_160 from '../Assets/Images/HollywoodParty/AGM2017_160.jpg';
import AGM2017_161 from '../Assets/Images/HollywoodParty/AGM2017_161.jpg';
import AGM2017_162 from '../Assets/Images/HollywoodParty/AGM2017_162.jpg';
import AGM2017_163 from '../Assets/Images/HollywoodParty/AGM2017_163.jpg';
import AGM2017_164 from '../Assets/Images/HollywoodParty/AGM2017_164.jpg';
import AGM2017_165 from '../Assets/Images/HollywoodParty/AGM2017_165.jpg';
import AGM2017_166 from '../Assets/Images/HollywoodParty/AGM2017_166.jpg';
import AGM2017_167 from '../Assets/Images/HollywoodParty/AGM2017_167.jpg';
import AGM2017_168 from '../Assets/Images/HollywoodParty/AGM2017_168.jpg';
import AGM2017_169 from '../Assets/Images/HollywoodParty/AGM2017_169.jpg';
import AGM2017_170 from '../Assets/Images/HollywoodParty/AGM2017_170.jpg';
import AGM2017_171 from '../Assets/Images/HollywoodParty/AGM2017_171.jpg';
import AGM2017_0171 from '../Assets/Images/HollywoodParty/AGM2017_0171.jpg';
import AGM2017_172 from '../Assets/Images/HollywoodParty/AGM2017_172.jpg';
import AGM2017_173 from '../Assets/Images/HollywoodParty/AGM2017_173.jpg';
import AGM2017_174 from '../Assets/Images/HollywoodParty/AGM2017_174.jpg';
import AGM2017_175 from '../Assets/Images/HollywoodParty/AGM2017_175.jpg';
import AGM2017_176 from '../Assets/Images/HollywoodParty/AGM2017_176.jpg';
import AGM2017_177 from '../Assets/Images/HollywoodParty/AGM2017_177.jpg';
import AGM2017_178 from '../Assets/Images/HollywoodParty/AGM2017_178.jpg';
import AGM2017_179 from '../Assets/Images/HollywoodParty/AGM2017_179.jpg';
import AGM2017_180 from '../Assets/Images/HollywoodParty/AGM2017_180.jpg';
import AGM2017_181 from '../Assets/Images/HollywoodParty/AGM2017_181.jpg';
import AGM2017_182 from '../Assets/Images/HollywoodParty/AGM2017_182.jpg';
import AGM2017_183 from '../Assets/Images/HollywoodParty/AGM2017_183.jpg';
import AGM2017_184 from '../Assets/Images/HollywoodParty/AGM2017_184.jpg';
import AGM2017_185 from '../Assets/Images/HollywoodParty/AGM2017_185.jpg';
import AGM2017_186 from '../Assets/Images/HollywoodParty/AGM2017_186.jpg';
import AGM2017_187 from '../Assets/Images/HollywoodParty/AGM2017_187.jpg';
import AGM2017_188 from '../Assets/Images/HollywoodParty/AGM2017_188.jpg';
import AGM2017_189 from '../Assets/Images/HollywoodParty/AGM2017_189.jpg';
import AGM2017_190 from '../Assets/Images/HollywoodParty/AGM2017_190.jpg';
import AGM2017_191 from '../Assets/Images/HollywoodParty/AGM2017_191.jpg';
import AGM2017_192 from '../Assets/Images/HollywoodParty/AGM2017_192.jpg';
import AGM2017_193 from '../Assets/Images/HollywoodParty/AGM2017_193.jpg';
import AGM2017_195 from '../Assets/Images/HollywoodParty/AGM2017_195.jpg';
import AGM2017_196 from '../Assets/Images/HollywoodParty/AGM2017_196.jpg';
import AGM2017_197 from '../Assets/Images/HollywoodParty/AGM2017_197.jpg';
import AGM2017_198 from '../Assets/Images/HollywoodParty/AGM2017_198.jpg';
import AGM2017_199 from '../Assets/Images/HollywoodParty/AGM2017_199.jpg';
import AGM2017_200 from '../Assets/Images/HollywoodParty/AGM2017_200.jpg';
import AGM2017_201 from '../Assets/Images/HollywoodParty/AGM2017_201.jpg';
import AGM2017_202 from '../Assets/Images/HollywoodParty/AGM2017_202.jpg';
import AGM2017_203 from '../Assets/Images/HollywoodParty/AGM2017_203.jpg';
import AGM2017_204 from '../Assets/Images/HollywoodParty/AGM2017_204.jpg';
import AGM2017_205 from '../Assets/Images/HollywoodParty/AGM2017_205.jpg';
import AGM2017_206 from '../Assets/Images/HollywoodParty/AGM2017_206.jpg';
import AGM2017_207 from '../Assets/Images/HollywoodParty/AGM2017_207.jpg';
import AGM2017_208 from '../Assets/Images/HollywoodParty/AGM2017_208.jpg';
import AGM2017_209 from '../Assets/Images/HollywoodParty/AGM2017_209.jpg';
import AGM2017_210 from '../Assets/Images/HollywoodParty/AGM2017_210.jpg';
import AGM2017_211 from '../Assets/Images/HollywoodParty/AGM2017_211.jpg';
import AGM2017_212 from '../Assets/Images/HollywoodParty/AGM2017_212.jpg';
import AGM2017_213 from '../Assets/Images/HollywoodParty/AGM2017_213.jpg';
import AGM2017_214 from '../Assets/Images/HollywoodParty/AGM2017_214.jpg';
import AGM2017_215 from '../Assets/Images/HollywoodParty/AGM2017_215.jpg';
import AGM2017_216 from '../Assets/Images/HollywoodParty/AGM2017_216.jpg';
import AGM2017_217 from '../Assets/Images/HollywoodParty/AGM2017_217.jpg';
import AGM2017_218 from '../Assets/Images/HollywoodParty/AGM2017_218.jpg';
import AGM2017_219 from '../Assets/Images/HollywoodParty/AGM2017_219.jpg';
import AGM2017_220 from '../Assets/Images/HollywoodParty/AGM2017_220.jpg';
import AGM2017_221 from '../Assets/Images/HollywoodParty/AGM2017_221.jpg';
import AGM2017_222 from '../Assets/Images/HollywoodParty/AGM2017_222.jpg';
import AGM2017_223 from '../Assets/Images/HollywoodParty/AGM2017_223.jpg';
import AGM2017_224 from '../Assets/Images/HollywoodParty/AGM2017_224.jpg';
import AGM2017_225 from '../Assets/Images/HollywoodParty/AGM2017_225.jpg';
import AGM2017_226 from '../Assets/Images/HollywoodParty/AGM2017_226.jpg';
import AGM2017_227 from '../Assets/Images/HollywoodParty/AGM2017_227.jpg';
import AGM2017_228 from '../Assets/Images/HollywoodParty/AGM2017_228.jpg';
import AGM2017_229 from '../Assets/Images/HollywoodParty/AGM2017_229.jpg';
import AGM2017_230 from '../Assets/Images/HollywoodParty/AGM2017_230.jpg';
import AGM2017_231 from '../Assets/Images/HollywoodParty/AGM2017_231.jpg';
import AGM2017_0231 from '../Assets/Images/HollywoodParty/AGM2017_0231.jpg';
import AGM2017_232 from '../Assets/Images/HollywoodParty/AGM2017_232.jpg';
import AGM2017_233 from '../Assets/Images/HollywoodParty/AGM2017_233.jpg';
import AGM2017_234 from '../Assets/Images/HollywoodParty/AGM2017_234.jpg';
import AGM2017_235 from '../Assets/Images/HollywoodParty/AGM2017_235.jpg';
import AGM2017_236 from '../Assets/Images/HollywoodParty/AGM2017_236.jpg';
import AGM2017_237 from '../Assets/Images/HollywoodParty/AGM2017_237.jpg';
import AGM2017_238 from '../Assets/Images/HollywoodParty/AGM2017_238.jpg';
import AGM2017_239 from '../Assets/Images/HollywoodParty/AGM2017_239.jpg';
import AGM2017_240 from '../Assets/Images/HollywoodParty/AGM2017_240.jpg';
import AGM2017_241 from '../Assets/Images/HollywoodParty/AGM2017_241.jpg';
import AGM2017_242 from '../Assets/Images/HollywoodParty/AGM2017_242.jpg';
import AGM2017_243 from '../Assets/Images/HollywoodParty/AGM2017_243.jpg';
import AGM2017_244 from '../Assets/Images/HollywoodParty/AGM2017_244.jpg';
import AGM2017_245 from '../Assets/Images/HollywoodParty/AGM2017_245.jpg';
import AGM2017_246 from '../Assets/Images/HollywoodParty/AGM2017_246.jpg';
import AGM2017_247 from '../Assets/Images/HollywoodParty/AGM2017_247.jpg';
import AGM2017_248 from '../Assets/Images/HollywoodParty/AGM2017_248.jpg';
import AGM2017_249 from '../Assets/Images/HollywoodParty/AGM2017_249.jpg';
import AGM2017_250 from '../Assets/Images/HollywoodParty/AGM2017_250.jpg';
import AGM2017_251 from '../Assets/Images/HollywoodParty/AGM2017_251.jpg';
import AGM2017_252 from '../Assets/Images/HollywoodParty/AGM2017_252.jpg';
import AGM2017_253 from '../Assets/Images/HollywoodParty/AGM2017_253.jpg';
import AGM2017_254 from '../Assets/Images/HollywoodParty/AGM2017_254.jpg';
import AGM2017_255 from '../Assets/Images/HollywoodParty/AGM2017_255.jpg';
import AGM2017_256 from '../Assets/Images/HollywoodParty/AGM2017_256.jpg';
import AGM2017_257 from '../Assets/Images/HollywoodParty/AGM2017_257.jpg';
import AGM2017_258 from '../Assets/Images/HollywoodParty/AGM2017_258.jpg';
import AGM2017_259 from '../Assets/Images/HollywoodParty/AGM2017_259.jpg';
import AGM2017_0311 from '../Assets/Images/HollywoodParty/AGM2017_0311.jpg';
import AGM2017_0391 from '../Assets/Images/HollywoodParty/AGM2017_0391.jpg';
import AGM2017_0441 from '../Assets/Images/HollywoodParty/AGM2017_0441.jpg';
import AGM2017_0561 from '../Assets/Images/HollywoodParty/AGM2017_0561.jpg';
import AGM2017_0591 from '../Assets/Images/HollywoodParty/AGM2017_0591.jpg';
import AGM2017_0721 from '../Assets/Images/HollywoodParty/AGM2017_0721.jpg';
import AGM2017_0821 from '../Assets/Images/HollywoodParty/AGM2017_0821.jpg';
import AGM2017_0901 from '../Assets/Images/HollywoodParty/AGM2017_0901.jpg';
import AGM2017_0971 from '../Assets/Images/HollywoodParty/AGM2017_0971.jpg';
import AGM2017_1031 from '../Assets/Images/HollywoodParty/AGM2017_1031.jpg';
import AGM2017_1081 from '../Assets/Images/HollywoodParty/AGM2017_1081.jpg';
import AGM2017_1201 from '../Assets/Images/HollywoodParty/AGM2017_1201.jpg';
import AGM2017_1351 from '../Assets/Images/HollywoodParty/AGM2017_1351.jpg';
import AGM2017_1641 from '../Assets/Images/HollywoodParty/AGM2017_1641.jpg';
import AGM2017_1711 from '../Assets/Images/HollywoodParty/AGM2017_1711.jpg';
import AGM2017_1721 from '../Assets/Images/HollywoodParty/AGM2017_1721.jpg';
import AGM2017_1741 from '../Assets/Images/HollywoodParty/AGM2017_1741.jpg';
import AGM2017_1961 from '../Assets/Images/HollywoodParty/AGM2017_1961.jpg';
import AGM2017_2031 from '../Assets/Images/HollywoodParty/AGM2017_2031.jpg';
import AGM2017_2121 from '../Assets/Images/HollywoodParty/AGM2017_2121.jpg';
import AGM2017_2141 from '../Assets/Images/HollywoodParty/AGM2017_2141.jpg';


class ChristmasParty2016 extends Component {
  static propTypes = {
  };

  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, {photo, index}) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  };
  
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  };

  render() {
    const photos = [
      {
        src: AGM2017_001,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_002,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_003,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_004,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_005,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_006,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_007,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_008,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_009,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_010,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_011,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_012,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_013,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_014,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_015,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_016,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_017,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_018,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_019,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_020,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_021,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_022,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_023,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_024,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_025,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_026,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_027,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_028,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_029,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_030,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_031,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_032,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_033,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_034,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_035,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_036,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_037,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_038,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_039,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_040,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_041,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_042,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_043,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_044,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_045,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_046,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_047,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_048,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_049,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_050,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_051,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_052,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_053,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_054,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_055,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_056,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_057,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_058,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_059,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_060,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_061,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_062,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_063,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_064,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_065,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_066,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_067,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_068,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_069,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_070,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_071,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_072,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_073,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_074,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_075,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_076,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_077,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_078,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_079,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_080,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_081,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_082,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_084,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_085,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_086,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_087,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_088,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_089,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_091,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_092,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_093,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_094,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_095,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_096,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_097,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_098,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_099,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_100,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_101,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_102,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_104,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_105,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_106,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_107,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_109,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_110,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_111,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_112,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_114,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_115,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_116,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_117,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_118,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_119,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_121,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0121,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_122,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_123,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_124,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_125,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_126,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_127,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_128,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_129,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_130,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_131,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_132,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_133,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_134,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_135,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_136,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_137,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_138,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_139,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_142,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_143,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_144,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_145,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_146,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_147,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_148,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_149,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_150,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_151,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_152,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_153,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_154,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_155,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_156,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_157,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_158,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_159,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_160,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_161,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_162,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_163,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_164,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_165,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_166,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_167,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_168,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_169,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_170,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_171,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0171,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_172,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_173,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_174,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_175,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_176,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_177,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_178,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_179,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_180,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_181,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_182,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_183,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_184,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_185,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_186,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_187,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_188,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_189,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_190,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_191,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_192,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_193,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_195,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_196,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_197,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_198,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_199,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_200,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_201,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_202,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_203,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_204,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_205,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_206,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_207,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_208,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_209,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_210,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_211,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_212,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_213,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_214,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_215,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_216,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_217,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_218,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_219,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_220,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_221,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_222,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_223,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_224,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_225,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_226,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_227,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_228,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_229,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_230,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_231,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0231,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_232,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_233,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_234,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_235,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_236,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_237,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_238,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_239,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_240,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_241,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_242,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_243,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_244,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_245,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_246,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_247,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_248,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_249,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_250,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_251,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_252,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_253,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_254,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_255,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_256,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_257,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_258,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_259,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0311,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0391,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_0441,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_0561,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0591,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0721,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_0821,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_0901,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_0971,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1031,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_1081,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1201,
        height: 2,
        width: 1.5
      },
      {
        src: AGM2017_1351,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1641,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1711,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1721,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1741,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_1961,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_2031,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_2121,
        height: 1.5,
        width: 2
      },
      {
        src: AGM2017_2141      ,
        height: 1.5,
        width: 2
      },
    ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Christmas Party 2016</title>
        </Helmet>
        <GeneralBanner title="AGM HOLLYWOOD CHRISTMAS PARTY 2016" />
        <div className="container mt-5">
          <Gallery photos={photos} onClick={(event, photo, index) => this.openLightbox(event, photo, index)} />
          <ModalGateway>
            {this.state.viewerIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  currentIndex={this.state.currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>          
        </div>
      </>
    );
  }
}

export default ChristmasParty2016;