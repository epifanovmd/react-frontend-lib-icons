import React, { FC, memo } from 'react';
import StickerRemoveSvg from '../svg/sticker-remove.svg';

export interface IStickerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerRemoveIcon: FC<IStickerRemoveIconProps> = memo(props => {
  return <StickerRemoveSvg {...props} />;
});
