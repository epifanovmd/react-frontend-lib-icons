import React, { FC, memo } from 'react';
import UnicycleSvg from '../svg/unicycle.svg';

export interface IUnicycleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnicycleIcon: FC<IUnicycleIconProps> = memo(props => {
  return <UnicycleSvg {...props} />;
});
