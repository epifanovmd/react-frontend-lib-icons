import React, { FC, memo } from 'react';
import StickerMinusSvg from '../svg/sticker-minus.svg';

export interface IStickerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerMinusIcon: FC<IStickerMinusIconProps> = memo(props => {
  return <StickerMinusSvg {...props} />;
});
