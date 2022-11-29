import React, { FC, memo } from 'react';
import StickerAlertSvg from '../svg/sticker-alert.svg';

export interface IStickerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerAlertIcon: FC<IStickerAlertIconProps> = memo(props => {
  return <StickerAlertSvg {...props} />;
});
