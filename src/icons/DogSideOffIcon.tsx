import React, { FC, memo } from 'react';
import DogSideOffSvg from '../svg/dog-side-off.svg';

export interface IDogSideOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DogSideOffIcon: FC<IDogSideOffIconProps> = memo(props => {
  return <DogSideOffSvg {...props} />;
});
