import React, { FC, memo } from 'react';
import HighDefinitionBoxSvg from '../svg/high-definition-box.svg';

export interface IHighDefinitionBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HighDefinitionBoxIcon: FC<IHighDefinitionBoxIconProps> = memo(props => {
  return <HighDefinitionBoxSvg {...props} />;
});
