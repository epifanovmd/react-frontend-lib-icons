import React, { FC, memo } from 'react';
import RelationManyToOneOrManySvg from '../svg/relation-many-to-one-or-many.svg';

export interface IRelationManyToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToOneOrManyIcon: FC<IRelationManyToOneOrManyIconProps> = memo(props => {
  return <RelationManyToOneOrManySvg {...props} />;
});
