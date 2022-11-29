import React, { FC, memo } from 'react';
import DomainSvg from '../svg/domain.svg';

export interface IDomainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DomainIcon: FC<IDomainIconProps> = memo(props => {
  return <DomainSvg {...props} />;
});
