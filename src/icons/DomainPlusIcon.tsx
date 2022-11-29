import React, { FC, memo } from 'react';
import DomainPlusSvg from '../svg/domain-plus.svg';

export interface IDomainPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DomainPlusIcon: FC<IDomainPlusIconProps> = memo(props => {
  return <DomainPlusSvg {...props} />;
});
