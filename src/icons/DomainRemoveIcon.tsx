import React, { FC, memo } from 'react';
import DomainRemoveSvg from '../svg/domain-remove.svg';

export interface IDomainRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DomainRemoveIcon: FC<IDomainRemoveIconProps> = memo(props => {
  return <DomainRemoveSvg {...props} />;
});
