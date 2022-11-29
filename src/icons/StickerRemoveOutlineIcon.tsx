import React, { FC, memo } from 'react';
import StickerRemoveOutlineSvg from '../svg/sticker-remove-outline.svg';

export interface IStickerRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerRemoveOutlineIcon: FC<IStickerRemoveOutlineIconProps> = memo(props => {
  return <StickerRemoveOutlineSvg {...props} />;
});
