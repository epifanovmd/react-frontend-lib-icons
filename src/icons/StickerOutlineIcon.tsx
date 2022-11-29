import React, { FC, memo } from 'react';
import StickerOutlineSvg from '../svg/sticker-outline.svg';

export interface IStickerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerOutlineIcon: FC<IStickerOutlineIconProps> = memo(props => {
  return <StickerOutlineSvg {...props} />;
});
