import React, { FC, memo } from 'react';
import PresentationSvg from '../svg/presentation.svg';

export interface IPresentationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PresentationIcon: FC<IPresentationIconProps> = memo(props => {
  return <PresentationSvg {...props} />;
});
