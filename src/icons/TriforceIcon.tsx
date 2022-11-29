import React, { FC, memo } from 'react';
import TriforceSvg from '../svg/triforce.svg';

export interface ITriforceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriforceIcon: FC<ITriforceIconProps> = memo(props => {
  return <TriforceSvg {...props} />;
});
