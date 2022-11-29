import React, { FC, memo } from 'react';
import RakeSvg from '../svg/rake.svg';

export interface IRakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RakeIcon: FC<IRakeIconProps> = memo(props => {
  return <RakeSvg {...props} />;
});
