import React, { FC, memo } from 'react';
import DogSvg from '../svg/dog.svg';

export interface IDogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DogIcon: FC<IDogIconProps> = memo(props => {
  return <DogSvg {...props} />;
});
