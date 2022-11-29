import React, { FC, memo } from 'react';
import SimpleIconsSvg from '../svg/simple-icons.svg';

export interface ISimpleIconsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimpleIconsIcon: FC<ISimpleIconsIconProps> = memo(props => {
  return <SimpleIconsSvg {...props} />;
});
