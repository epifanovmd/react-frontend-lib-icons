import React, { FC, memo } from 'react';
import RelationZeroOrOneToZeroOrManySvg from '../svg/relation-zero-or-one-to-zero-or-many.svg';

export interface IRelationZeroOrOneToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToZeroOrManyIcon: FC<IRelationZeroOrOneToZeroOrManyIconProps> = memo(props => {
  return <RelationZeroOrOneToZeroOrManySvg {...props} />;
});
