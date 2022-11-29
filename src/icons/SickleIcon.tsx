import React, { FC, memo } from 'react';
import SickleSvg from '../svg/sickle.svg';

export interface ISickleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SickleIcon: FC<ISickleIconProps> = memo(props => {
  return <SickleSvg {...props} />;
});
