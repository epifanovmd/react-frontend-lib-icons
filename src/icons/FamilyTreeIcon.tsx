import React, { FC, memo } from 'react';
import FamilyTreeSvg from '../svg/family-tree.svg';

export interface IFamilyTreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FamilyTreeIcon: FC<IFamilyTreeIconProps> = memo(props => {
  return <FamilyTreeSvg {...props} />;
});
