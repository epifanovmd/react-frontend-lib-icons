import React, { FC, memo } from 'react';
import SassSvg from '../svg/sass.svg';

export interface ISassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SassIcon: FC<ISassIconProps> = memo(props => {
  return <SassSvg {...props} />;
});
