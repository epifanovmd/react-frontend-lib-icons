import React, { FC, memo } from 'react';
import DeltaSvg from '../svg/delta.svg';

export interface IDeltaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeltaIcon: FC<IDeltaIconProps> = memo(props => {
  return <DeltaSvg {...props} />;
});
