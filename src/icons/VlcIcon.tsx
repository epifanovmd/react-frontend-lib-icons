import React, { FC, memo } from 'react';
import VlcSvg from '../svg/vlc.svg';

export interface IVlcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VlcIcon: FC<IVlcIconProps> = memo(props => {
  return <VlcSvg {...props} />;
});
