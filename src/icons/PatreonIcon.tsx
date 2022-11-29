import React, { FC, memo } from 'react';
import PatreonSvg from '../svg/patreon.svg';

export interface IPatreonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PatreonIcon: FC<IPatreonIconProps> = memo(props => {
  return <PatreonSvg {...props} />;
});
