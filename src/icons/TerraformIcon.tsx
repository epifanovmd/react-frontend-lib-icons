import React, { FC, memo } from 'react';
import TerraformSvg from '../svg/terraform.svg';

export interface ITerraformIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TerraformIcon: FC<ITerraformIconProps> = memo(props => {
  return <TerraformSvg {...props} />;
});
