import React, { FC, memo } from 'react';
import StickerCheckOutlineSvg from '../svg/sticker-check-outline.svg';

export interface IStickerCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerCheckOutlineIcon: FC<IStickerCheckOutlineIconProps> = memo(props => {
  return <StickerCheckOutlineSvg {...props} />;
});
