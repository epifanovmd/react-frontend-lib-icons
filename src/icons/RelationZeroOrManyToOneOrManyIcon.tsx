import React, { FC, memo } from 'react';
import RelationZeroOrManyToOneOrManySvg from '../svg/relation-zero-or-many-to-one-or-many.svg';

export interface IRelationZeroOrManyToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToOneOrManyIcon: FC<IRelationZeroOrManyToOneOrManyIconProps> = memo(props => {
  return <RelationZeroOrManyToOneOrManySvg {...props} />;
});
