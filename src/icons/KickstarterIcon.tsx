import React, { FC, memo } from 'react';
import KickstarterSvg from '../svg/kickstarter.svg';

export interface IKickstarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KickstarterIcon: FC<IKickstarterIconProps> = memo(props => {
  return <KickstarterSvg {...props} />;
});
