import React, { FC, memo } from 'react';
import StickerPlusOutlineSvg from '../svg/sticker-plus-outline.svg';

export interface IStickerPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerPlusOutlineIcon: FC<IStickerPlusOutlineIconProps> = memo(props => {
  return <StickerPlusOutlineSvg {...props} />;
});
