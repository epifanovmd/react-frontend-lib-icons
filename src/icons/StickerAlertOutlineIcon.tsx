import React, { FC, memo } from 'react';
import StickerAlertOutlineSvg from '../svg/sticker-alert-outline.svg';

export interface IStickerAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerAlertOutlineIcon: FC<IStickerAlertOutlineIconProps> = memo(props => {
  return <StickerAlertOutlineSvg {...props} />;
});
