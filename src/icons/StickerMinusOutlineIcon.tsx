import React, { FC, memo } from 'react';
import StickerMinusOutlineSvg from '../svg/sticker-minus-outline.svg';

export interface IStickerMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerMinusOutlineIcon: FC<IStickerMinusOutlineIconProps> = memo(props => {
  return <StickerMinusOutlineSvg {...props} />;
});
