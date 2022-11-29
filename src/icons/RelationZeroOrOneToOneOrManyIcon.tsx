import React, { FC, memo } from 'react';
import RelationZeroOrOneToOneOrManySvg from '../svg/relation-zero-or-one-to-one-or-many.svg';

export interface IRelationZeroOrOneToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToOneOrManyIcon: FC<IRelationZeroOrOneToOneOrManyIconProps> = memo(props => {
  return <RelationZeroOrOneToOneOrManySvg {...props} />;
});
