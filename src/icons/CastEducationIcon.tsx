import React, { FC, memo } from 'react';
import CastEducationSvg from '../svg/cast-education.svg';

export interface ICastEducationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastEducationIcon: FC<ICastEducationIconProps> = memo(props => {
  return <CastEducationSvg {...props} />;
});
