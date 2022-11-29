import React, { FC, memo } from 'react';
import RelationZeroOrOneToManySvg from '../svg/relation-zero-or-one-to-many.svg';

export interface IRelationZeroOrOneToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToManyIcon: FC<IRelationZeroOrOneToManyIconProps> = memo(props => {
  return <RelationZeroOrOneToManySvg {...props} />;
});
