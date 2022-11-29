import React, { FC, memo } from 'react';
import SummitSvg from '../svg/summit.svg';

export interface ISummitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SummitIcon: FC<ISummitIconProps> = memo(props => {
  return <SummitSvg {...props} />;
});
