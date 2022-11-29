import React, { FC, memo } from 'react';
import StickerSvg from '../svg/sticker.svg';

export interface IStickerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerIcon: FC<IStickerIconProps> = memo(props => {
  return <StickerSvg {...props} />;
});
