import React, { FC, memo } from 'react';
import RelationOneOrManyToOneOrManySvg from '../svg/relation-one-or-many-to-one-or-many.svg';

export interface IRelationOneOrManyToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToOneOrManyIcon: FC<IRelationOneOrManyToOneOrManyIconProps> = memo(props => {
  return <RelationOneOrManyToOneOrManySvg {...props} />;
});
