import React, { FC, memo } from 'react';
import PowerSocketUkSvg from '../svg/power-socket-uk.svg';

export interface IPowerSocketUkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketUkIcon: FC<IPowerSocketUkIconProps> = memo(props => {
  return <PowerSocketUkSvg {...props} />;
});
