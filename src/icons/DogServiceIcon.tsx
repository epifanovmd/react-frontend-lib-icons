import React, { FC, memo } from 'react';
import DogServiceSvg from '../svg/dog-service.svg';

export interface IDogServiceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DogServiceIcon: FC<IDogServiceIconProps> = memo(props => {
  return <DogServiceSvg {...props} />;
});
