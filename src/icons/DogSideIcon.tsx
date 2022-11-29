import React, { FC, memo } from 'react';
import DogSideSvg from '../svg/dog-side.svg';

export interface IDogSideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DogSideIcon: FC<IDogSideIconProps> = memo(props => {
  return <DogSideSvg {...props} />;
});
