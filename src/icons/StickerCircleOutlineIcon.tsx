import React, { FC, memo } from 'react';
import StickerCircleOutlineSvg from '../svg/sticker-circle-outline.svg';

export interface IStickerCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerCircleOutlineIcon: FC<IStickerCircleOutlineIconProps> = memo(props => {
  return <StickerCircleOutlineSvg {...props} />;
});
