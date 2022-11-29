import React, { FC, memo } from 'react';
import StickerPlusSvg from '../svg/sticker-plus.svg';

export interface IStickerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerPlusIcon: FC<IStickerPlusIconProps> = memo(props => {
  return <StickerPlusSvg {...props} />;
});
