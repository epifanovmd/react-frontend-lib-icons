import React, { FC, memo } from 'react';
import ProfessionalHexagonSvg from '../svg/professional-hexagon.svg';

export interface IProfessionalHexagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProfessionalHexagonIcon: FC<IProfessionalHexagonIconProps> = memo(props => {
  return <ProfessionalHexagonSvg {...props} />;
});
