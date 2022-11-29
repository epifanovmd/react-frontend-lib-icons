import React, { FC, memo } from 'react';
import StickerCheckSvg from '../svg/sticker-check.svg';

export interface IStickerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerCheckIcon: FC<IStickerCheckIconProps> = memo(props => {
  return <StickerCheckSvg {...props} />;
});
