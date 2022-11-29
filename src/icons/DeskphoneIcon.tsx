import React, { FC, memo } from 'react';
import DeskphoneSvg from '../svg/deskphone.svg';

export interface IDeskphoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeskphoneIcon: FC<IDeskphoneIconProps> = memo(props => {
  return <DeskphoneSvg {...props} />;
});
