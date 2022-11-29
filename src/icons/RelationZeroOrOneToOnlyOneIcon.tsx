import React, { FC, memo } from 'react';
import RelationZeroOrOneToOnlyOneSvg from '../svg/relation-zero-or-one-to-only-one.svg';

export interface IRelationZeroOrOneToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToOnlyOneIcon: FC<IRelationZeroOrOneToOnlyOneIconProps> = memo(props => {
  return <RelationZeroOrOneToOnlyOneSvg {...props} />;
});
