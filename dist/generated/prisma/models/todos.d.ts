import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model todos
 *
 */
export type todosModel = runtime.Types.Result.DefaultSelection<Prisma.$todosPayload>;
export type AggregateTodos = {
    _count: TodosCountAggregateOutputType | null;
    _min: TodosMinAggregateOutputType | null;
    _max: TodosMaxAggregateOutputType | null;
};
export type TodosMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    description: string | null;
    completed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TodosMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    description: string | null;
    completed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TodosCountAggregateOutputType = {
    id: number;
    user_id: number;
    title: number;
    description: number;
    completed: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type TodosMinAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    completed?: true;
    created_at?: true;
    updated_at?: true;
};
export type TodosMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    completed?: true;
    created_at?: true;
    updated_at?: true;
};
export type TodosCountAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    completed?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type TodosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which todos to aggregate.
     */
    where?: Prisma.todosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of todos to fetch.
     */
    orderBy?: Prisma.todosOrderByWithRelationInput | Prisma.todosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.todosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` todos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` todos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned todos
    **/
    _count?: true | TodosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TodosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TodosMaxAggregateInputType;
};
export type GetTodosAggregateType<T extends TodosAggregateArgs> = {
    [P in keyof T & keyof AggregateTodos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTodos[P]> : Prisma.GetScalarType<T[P], AggregateTodos[P]>;
};
export type todosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.todosWhereInput;
    orderBy?: Prisma.todosOrderByWithAggregationInput | Prisma.todosOrderByWithAggregationInput[];
    by: Prisma.TodosScalarFieldEnum[] | Prisma.TodosScalarFieldEnum;
    having?: Prisma.todosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TodosCountAggregateInputType | true;
    _min?: TodosMinAggregateInputType;
    _max?: TodosMaxAggregateInputType;
};
export type TodosGroupByOutputType = {
    id: string;
    user_id: string;
    title: string;
    description: string | null;
    completed: boolean;
    created_at: Date;
    updated_at: Date;
    _count: TodosCountAggregateOutputType | null;
    _min: TodosMinAggregateOutputType | null;
    _max: TodosMaxAggregateOutputType | null;
};
type GetTodosGroupByPayload<T extends todosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TodosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TodosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TodosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TodosGroupByOutputType[P]>;
}>>;
export type todosWhereInput = {
    AND?: Prisma.todosWhereInput | Prisma.todosWhereInput[];
    OR?: Prisma.todosWhereInput[];
    NOT?: Prisma.todosWhereInput | Prisma.todosWhereInput[];
    id?: Prisma.UuidFilter<"todos"> | string;
    user_id?: Prisma.UuidFilter<"todos"> | string;
    title?: Prisma.StringFilter<"todos"> | string;
    description?: Prisma.StringNullableFilter<"todos"> | string | null;
    completed?: Prisma.BoolFilter<"todos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type todosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type todosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.todosWhereInput | Prisma.todosWhereInput[];
    OR?: Prisma.todosWhereInput[];
    NOT?: Prisma.todosWhereInput | Prisma.todosWhereInput[];
    user_id?: Prisma.UuidFilter<"todos"> | string;
    title?: Prisma.StringFilter<"todos"> | string;
    description?: Prisma.StringNullableFilter<"todos"> | string | null;
    completed?: Prisma.BoolFilter<"todos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type todosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.todosCountOrderByAggregateInput;
    _max?: Prisma.todosMaxOrderByAggregateInput;
    _min?: Prisma.todosMinOrderByAggregateInput;
};
export type todosScalarWhereWithAggregatesInput = {
    AND?: Prisma.todosScalarWhereWithAggregatesInput | Prisma.todosScalarWhereWithAggregatesInput[];
    OR?: Prisma.todosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.todosScalarWhereWithAggregatesInput | Prisma.todosScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"todos"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"todos"> | string;
    title?: Prisma.StringWithAggregatesFilter<"todos"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"todos"> | string | null;
    completed?: Prisma.BoolWithAggregatesFilter<"todos"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"todos"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"todos"> | Date | string;
};
export type todosCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutTodosInput;
};
export type todosUncheckedCreateInput = {
    id?: string;
    user_id: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type todosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutTodosNestedInput;
};
export type todosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type todosCreateManyInput = {
    id?: string;
    user_id: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type todosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type todosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TodosListRelationFilter = {
    every?: Prisma.todosWhereInput;
    some?: Prisma.todosWhereInput;
    none?: Prisma.todosWhereInput;
};
export type todosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type todosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type todosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type todosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type todosCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput> | Prisma.todosCreateWithoutUsersInput[] | Prisma.todosUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.todosCreateOrConnectWithoutUsersInput | Prisma.todosCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.todosCreateManyUsersInputEnvelope;
    connect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
};
export type todosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput> | Prisma.todosCreateWithoutUsersInput[] | Prisma.todosUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.todosCreateOrConnectWithoutUsersInput | Prisma.todosCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.todosCreateManyUsersInputEnvelope;
    connect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
};
export type todosUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput> | Prisma.todosCreateWithoutUsersInput[] | Prisma.todosUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.todosCreateOrConnectWithoutUsersInput | Prisma.todosCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.todosUpsertWithWhereUniqueWithoutUsersInput | Prisma.todosUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.todosCreateManyUsersInputEnvelope;
    set?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    disconnect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    delete?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    connect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    update?: Prisma.todosUpdateWithWhereUniqueWithoutUsersInput | Prisma.todosUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.todosUpdateManyWithWhereWithoutUsersInput | Prisma.todosUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.todosScalarWhereInput | Prisma.todosScalarWhereInput[];
};
export type todosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput> | Prisma.todosCreateWithoutUsersInput[] | Prisma.todosUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.todosCreateOrConnectWithoutUsersInput | Prisma.todosCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.todosUpsertWithWhereUniqueWithoutUsersInput | Prisma.todosUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.todosCreateManyUsersInputEnvelope;
    set?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    disconnect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    delete?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    connect?: Prisma.todosWhereUniqueInput | Prisma.todosWhereUniqueInput[];
    update?: Prisma.todosUpdateWithWhereUniqueWithoutUsersInput | Prisma.todosUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.todosUpdateManyWithWhereWithoutUsersInput | Prisma.todosUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.todosScalarWhereInput | Prisma.todosScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type todosCreateWithoutUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type todosUncheckedCreateWithoutUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type todosCreateOrConnectWithoutUsersInput = {
    where: Prisma.todosWhereUniqueInput;
    create: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput>;
};
export type todosCreateManyUsersInputEnvelope = {
    data: Prisma.todosCreateManyUsersInput | Prisma.todosCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type todosUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.todosWhereUniqueInput;
    update: Prisma.XOR<Prisma.todosUpdateWithoutUsersInput, Prisma.todosUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.todosCreateWithoutUsersInput, Prisma.todosUncheckedCreateWithoutUsersInput>;
};
export type todosUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.todosWhereUniqueInput;
    data: Prisma.XOR<Prisma.todosUpdateWithoutUsersInput, Prisma.todosUncheckedUpdateWithoutUsersInput>;
};
export type todosUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.todosScalarWhereInput;
    data: Prisma.XOR<Prisma.todosUpdateManyMutationInput, Prisma.todosUncheckedUpdateManyWithoutUsersInput>;
};
export type todosScalarWhereInput = {
    AND?: Prisma.todosScalarWhereInput | Prisma.todosScalarWhereInput[];
    OR?: Prisma.todosScalarWhereInput[];
    NOT?: Prisma.todosScalarWhereInput | Prisma.todosScalarWhereInput[];
    id?: Prisma.UuidFilter<"todos"> | string;
    user_id?: Prisma.UuidFilter<"todos"> | string;
    title?: Prisma.StringFilter<"todos"> | string;
    description?: Prisma.StringNullableFilter<"todos"> | string | null;
    completed?: Prisma.BoolFilter<"todos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"todos"> | Date | string;
};
export type todosCreateManyUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    completed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type todosUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type todosUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type todosUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type todosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    description?: boolean;
    completed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todos"]>;
export type todosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    description?: boolean;
    completed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todos"]>;
export type todosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    description?: boolean;
    completed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todos"]>;
export type todosSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    description?: boolean;
    completed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type todosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "completed" | "created_at" | "updated_at", ExtArgs["result"]["todos"]>;
export type todosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type todosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type todosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $todosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "todos";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        title: string;
        description: string | null;
        completed: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["todos"]>;
    composites: {};
};
export type todosGetPayload<S extends boolean | null | undefined | todosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$todosPayload, S>;
export type todosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<todosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TodosCountAggregateInputType | true;
};
export interface todosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['todos'];
        meta: {
            name: 'todos';
        };
    };
    /**
     * Find zero or one Todos that matches the filter.
     * @param {todosFindUniqueArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends todosFindUniqueArgs>(args: Prisma.SelectSubset<T, todosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Todos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {todosFindUniqueOrThrowArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends todosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, todosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindFirstArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends todosFindFirstArgs>(args?: Prisma.SelectSubset<T, todosFindFirstArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Todos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindFirstOrThrowArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends todosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, todosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todos.findMany()
     *
     * // Get first 10 Todos
     * const todos = await prisma.todos.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const todosWithIdOnly = await prisma.todos.findMany({ select: { id: true } })
     *
     */
    findMany<T extends todosFindManyArgs>(args?: Prisma.SelectSubset<T, todosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Todos.
     * @param {todosCreateArgs} args - Arguments to create a Todos.
     * @example
     * // Create one Todos
     * const Todos = await prisma.todos.create({
     *   data: {
     *     // ... data to create a Todos
     *   }
     * })
     *
     */
    create<T extends todosCreateArgs>(args: Prisma.SelectSubset<T, todosCreateArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Todos.
     * @param {todosCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todos = await prisma.todos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends todosCreateManyArgs>(args?: Prisma.SelectSubset<T, todosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Todos and returns the data saved in the database.
     * @param {todosCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todos = await prisma.todos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Todos and only return the `id`
     * const todosWithIdOnly = await prisma.todos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends todosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, todosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Todos.
     * @param {todosDeleteArgs} args - Arguments to delete one Todos.
     * @example
     * // Delete one Todos
     * const Todos = await prisma.todos.delete({
     *   where: {
     *     // ... filter to delete one Todos
     *   }
     * })
     *
     */
    delete<T extends todosDeleteArgs>(args: Prisma.SelectSubset<T, todosDeleteArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Todos.
     * @param {todosUpdateArgs} args - Arguments to update one Todos.
     * @example
     * // Update one Todos
     * const todos = await prisma.todos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends todosUpdateArgs>(args: Prisma.SelectSubset<T, todosUpdateArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Todos.
     * @param {todosDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends todosDeleteManyArgs>(args?: Prisma.SelectSubset<T, todosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todos = await prisma.todos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends todosUpdateManyArgs>(args: Prisma.SelectSubset<T, todosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Todos and returns the data updated in the database.
     * @param {todosUpdateManyAndReturnArgs} args - Arguments to update many Todos.
     * @example
     * // Update many Todos
     * const todos = await prisma.todos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Todos and only return the `id`
     * const todosWithIdOnly = await prisma.todos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends todosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, todosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Todos.
     * @param {todosUpsertArgs} args - Arguments to update or create a Todos.
     * @example
     * // Update or create a Todos
     * const todos = await prisma.todos.upsert({
     *   create: {
     *     // ... data to create a Todos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todos we want to update
     *   }
     * })
     */
    upsert<T extends todosUpsertArgs>(args: Prisma.SelectSubset<T, todosUpsertArgs<ExtArgs>>): Prisma.Prisma__todosClient<runtime.Types.Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todos.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends todosCountArgs>(args?: Prisma.Subset<T, todosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TodosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodosAggregateArgs>(args: Prisma.Subset<T, TodosAggregateArgs>): Prisma.PrismaPromise<GetTodosAggregateType<T>>;
    /**
     * Group by Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends todosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: todosGroupByArgs['orderBy'];
    } : {
        orderBy?: todosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, todosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the todos model
     */
    readonly fields: todosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for todos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__todosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the todos model
 */
export interface todosFieldRefs {
    readonly id: Prisma.FieldRef<"todos", 'String'>;
    readonly user_id: Prisma.FieldRef<"todos", 'String'>;
    readonly title: Prisma.FieldRef<"todos", 'String'>;
    readonly description: Prisma.FieldRef<"todos", 'String'>;
    readonly completed: Prisma.FieldRef<"todos", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"todos", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"todos", 'DateTime'>;
}
/**
 * todos findUnique
 */
export type todosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter, which todos to fetch.
     */
    where: Prisma.todosWhereUniqueInput;
};
/**
 * todos findUniqueOrThrow
 */
export type todosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter, which todos to fetch.
     */
    where: Prisma.todosWhereUniqueInput;
};
/**
 * todos findFirst
 */
export type todosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter, which todos to fetch.
     */
    where?: Prisma.todosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of todos to fetch.
     */
    orderBy?: Prisma.todosOrderByWithRelationInput | Prisma.todosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for todos.
     */
    cursor?: Prisma.todosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` todos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` todos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of todos.
     */
    distinct?: Prisma.TodosScalarFieldEnum | Prisma.TodosScalarFieldEnum[];
};
/**
 * todos findFirstOrThrow
 */
export type todosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter, which todos to fetch.
     */
    where?: Prisma.todosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of todos to fetch.
     */
    orderBy?: Prisma.todosOrderByWithRelationInput | Prisma.todosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for todos.
     */
    cursor?: Prisma.todosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` todos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` todos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of todos.
     */
    distinct?: Prisma.TodosScalarFieldEnum | Prisma.TodosScalarFieldEnum[];
};
/**
 * todos findMany
 */
export type todosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter, which todos to fetch.
     */
    where?: Prisma.todosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of todos to fetch.
     */
    orderBy?: Prisma.todosOrderByWithRelationInput | Prisma.todosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing todos.
     */
    cursor?: Prisma.todosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` todos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` todos.
     */
    skip?: number;
    distinct?: Prisma.TodosScalarFieldEnum | Prisma.TodosScalarFieldEnum[];
};
/**
 * todos create
 */
export type todosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * The data needed to create a todos.
     */
    data: Prisma.XOR<Prisma.todosCreateInput, Prisma.todosUncheckedCreateInput>;
};
/**
 * todos createMany
 */
export type todosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many todos.
     */
    data: Prisma.todosCreateManyInput | Prisma.todosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * todos createManyAndReturn
 */
export type todosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * The data used to create many todos.
     */
    data: Prisma.todosCreateManyInput | Prisma.todosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * todos update
 */
export type todosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * The data needed to update a todos.
     */
    data: Prisma.XOR<Prisma.todosUpdateInput, Prisma.todosUncheckedUpdateInput>;
    /**
     * Choose, which todos to update.
     */
    where: Prisma.todosWhereUniqueInput;
};
/**
 * todos updateMany
 */
export type todosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update todos.
     */
    data: Prisma.XOR<Prisma.todosUpdateManyMutationInput, Prisma.todosUncheckedUpdateManyInput>;
    /**
     * Filter which todos to update
     */
    where?: Prisma.todosWhereInput;
    /**
     * Limit how many todos to update.
     */
    limit?: number;
};
/**
 * todos updateManyAndReturn
 */
export type todosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * The data used to update todos.
     */
    data: Prisma.XOR<Prisma.todosUpdateManyMutationInput, Prisma.todosUncheckedUpdateManyInput>;
    /**
     * Filter which todos to update
     */
    where?: Prisma.todosWhereInput;
    /**
     * Limit how many todos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * todos upsert
 */
export type todosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * The filter to search for the todos to update in case it exists.
     */
    where: Prisma.todosWhereUniqueInput;
    /**
     * In case the todos found by the `where` argument doesn't exist, create a new todos with this data.
     */
    create: Prisma.XOR<Prisma.todosCreateInput, Prisma.todosUncheckedCreateInput>;
    /**
     * In case the todos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.todosUpdateInput, Prisma.todosUncheckedUpdateInput>;
};
/**
 * todos delete
 */
export type todosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
    /**
     * Filter which todos to delete.
     */
    where: Prisma.todosWhereUniqueInput;
};
/**
 * todos deleteMany
 */
export type todosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which todos to delete
     */
    where?: Prisma.todosWhereInput;
    /**
     * Limit how many todos to delete.
     */
    limit?: number;
};
/**
 * todos without action
 */
export type todosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: Prisma.todosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the todos
     */
    omit?: Prisma.todosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.todosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=todos.d.ts.map